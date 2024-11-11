import { Webview } from "webview-bun";
const webview = new Webview();
import html from "./../../frontend/dist/index.html" with { type: "text" };
webview.setHTML(html);
webview.run();
