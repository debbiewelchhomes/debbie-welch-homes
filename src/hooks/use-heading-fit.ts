import { useEffect } from "react";

/** Fit shared script accents to their content area, not to the viewport. */
export function useHeadingFit() {
  useEffect(() => {
    const selector = "main :is(.eyebrow, .font-script, .button-script)";
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let disposed = false;
    const observed = new Set<Element>();
    const fit = () => {
      frame = 0;
      document.querySelectorAll<HTMLElement>(selector).forEach((heading) => {
        const parent = heading.parentElement;
        if (!parent || !heading.getClientRects().length) return;
        if (!observed.has(parent)) {
          observed.add(parent);
          resizeObserver.observe(parent);
        }
        const style = getComputedStyle(heading);
        const parentStyle = getComputedStyle(parent);
        const maximum = parseFloat(style.getPropertyValue("--script-size")) * 16;
        const minimum = parseFloat(style.getPropertyValue("--script-min-size")) * 16;
        const rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const maxSize = maximum * rootSize / 16;
        const minSize = minimum * rootSize / 16;
        const available = parent.clientWidth - parseFloat(parentStyle.paddingLeft)
          - parseFloat(parentStyle.paddingRight);
        const ownMaximum = style.maxWidth.endsWith("px") ? parseFloat(style.maxWidth) : NaN;
        const width = Number.isFinite(ownMaximum) ? Math.min(available, ownMaximum) : available;
        if (width <= 0 || !Number.isFinite(maxSize) || !Number.isFinite(minSize)) return;
        context.font = `${style.fontWeight} ${maxSize}px ${style.fontFamily}`;
        // Preserve deliberate line breaks; otherwise prefer one line if it stays readable.
        const lines = heading.innerText.split(/\n/).map((line) => line.trim()).filter(Boolean);
        const measured = Math.max(...lines.map((line) => context.measureText(line).width), 1);
        const size = Math.max(minSize, Math.min(maxSize, maxSize * Math.max(0, width - 8) / measured));
        const value = `${Math.floor(size * 10) / 10}px`;
        if (heading.style.getPropertyValue("--script-fit-size") !== value) {
          heading.style.setProperty("--script-fit-size", value);
        }
      });
    };
    const schedule = () => {
      if (!disposed && !frame) frame = requestAnimationFrame(fit);
    };
    const resizeObserver = new ResizeObserver(schedule);
    const mutationObserver = new MutationObserver(schedule);
    mutationObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
    window.addEventListener("resize", schedule);
    document.fonts.addEventListener("loadingdone", schedule);
    void document.fonts.ready.then(schedule);
    schedule();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("resize", schedule);
      document.fonts.removeEventListener("loadingdone", schedule);
    };
  }, []);
}