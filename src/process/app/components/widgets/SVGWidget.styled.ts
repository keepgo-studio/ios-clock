import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("app-svg-widget")
class SVGWidget extends LitElement {
  @property()
  fill = "#000";

  @property()
  width = 45;

  @property()
  height = 45;

  @property()
  data?: TSVGModule;

  render() {
    if (typeof this.data === "undefined") return "";

    return html`
      <style>
        svg {
          width: ${this.width}px;
          height: ${this.height}px;
          fill: ${this.fill};
        }
        svg path {
          fill: ${this.fill};
        }
      </style>
      ${unsafeHTML(this.data)}
    `;
  }
}