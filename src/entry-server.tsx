import { renderToPipeableStream } from "react-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";
import { Writable } from "node:stream";
import { AppShell } from "./App";

export const render = async (url: string) => {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = await new Promise<string>((resolve, reject) => {
    const chunks: Buffer[] = [];
    const stream = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppShell />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          const destination = new Writable({
            write(chunk, _encoding, callback) {
              chunks.push(Buffer.from(chunk));
              callback();
            },
          });
          destination.on("finish", () => resolve(Buffer.concat(chunks).toString("utf8")));
          destination.on("error", reject);
          stream.pipe(destination);
        },
        onError: reject,
      }
    );
  });

  return { html, helmet: helmetContext.helmet };
};

