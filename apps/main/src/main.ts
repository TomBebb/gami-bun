import { Webview } from "webview-bun";
import * as fs from "node:fs/promises";
const webview = new Webview();
import html from "./../../frontend/dist/index.html" with { type: "text" };
webview.setHTML(html);
webview.run();
