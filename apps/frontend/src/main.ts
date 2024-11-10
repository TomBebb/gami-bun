import "@ui5/webcomponents/Button.js";
import "@ui5/webcomponents/Title.js";
import { customElement } from "lit/decorators.js";
import { LitElement, html } from "lit";

@customElement("my-element")
class MyElement extends LitElement {
  render() {
    return html` <div id="application-container">
      <ui5-title
        >This is the new app with many third-party extensions!</ui5-title
      >
      <ui5-card>
        <ui5-button>Hello</ui5-button>
        <ui5-input></ui5-input>
      </ui5-card>
    </div>`;
  }
}
