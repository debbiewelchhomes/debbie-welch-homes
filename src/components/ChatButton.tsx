import { useEffect } from "react";

const ChatButton = () => {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let loaded = false;
    const loadChat = () => {
      if (loaded || document.getElementById("jivosite-widget")) return;
      loaded = true;
      const script = document.createElement("script");
      script.id = "jivosite-widget";
      script.src = "//code.jivosite.com/widget/rIV3GuN2Kf";
      script.async = true;
      document.body.appendChild(script);
      window.removeEventListener("pointerdown", loadChat);
      window.removeEventListener("keydown", loadChat);
      window.removeEventListener("scroll", loadChat);
      if (timer) clearTimeout(timer);
    };
    const schedule = () => { timer = setTimeout(loadChat, 2000); };
    window.addEventListener("pointerdown", loadChat, { once: true, passive: true });
    window.addEventListener("keydown", loadChat, { once: true });
    window.addEventListener("scroll", loadChat, { once: true, passive: true });
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => {
      window.removeEventListener("load", schedule);
      window.removeEventListener("pointerdown", loadChat);
      window.removeEventListener("keydown", loadChat);
      window.removeEventListener("scroll", loadChat);
      if (timer) clearTimeout(timer);
    };
  }, []);
  return null;
};

export default ChatButton;
