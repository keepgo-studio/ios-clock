import { html, LitElement, PropertyValueMap } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("widget-bottom-up-sheet")
class BottomUpSheet extends LitElement {
  @state()
  show = false;

  protected willUpdate(): void {
    const appMain = document.querySelector("app-main") as HTMLElement;

    if (this.show) {
      appMain.style.transform = "scale(0.92)";
    } else {
      appMain.style.transform = "";
    }
  }

  protected firstUpdated() {
    const appMain = document.querySelector("app-main") as HTMLElement;
    appMain.style.transition = "ease 300ms";
  }

  render() {
    return html` <slot></slot> `;
  }
}
