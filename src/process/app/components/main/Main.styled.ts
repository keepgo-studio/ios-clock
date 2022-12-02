import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-main")
class Main extends LitElement {
  static styles = css`
    section {
      height: auto;
    }
  `;

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
  render() {
    return html` <section></section> `;
  }
}
