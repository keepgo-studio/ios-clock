import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-bottom-up-sheet")
class BottomUpSheet extends LitElement {
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  render() {
    console.log(this.renderRoot.parentNode);
    return html`
      <section>
        <slot></slot>
      </section>
    `;
  }
}
