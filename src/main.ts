import { Webview } from "webview-bun";
import * as fs from "node:fs/promises";
const webview = new Webview();
const html = await fs.readFile("frontend/dist/index.html", "utf-8");
webview.setHTML(html);
webview.run();
