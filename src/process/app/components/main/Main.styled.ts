import { css, html, LitElement } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import "./bottom-navbar/BottomNavbar";
import "./timer/Timer";
import "./stopwatch/Stopwatch";

@customElement("app-main")
class Main extends LitElement {
  @state()
  navbarIdx = parseInt(localStorage.getItem("navbar-index") || "0");

  @query("app-bottom-navbar")
  BottomNavbar: Element;

  modeList = ["app-world-clock", "app-alarm", "app-stopwatch", "app-timer"];

  static styles = css`
    section {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .screen {
      flex-grow: 1;
      padding: 0 16px;
    }
    .screen article {
      height: 100%;
    }
  `;

  protected firstUpdated(): void {
    this.BottomNavbar.dispatchEvent(
      new CustomEvent("init", {
        detail: this.navbarIdx,
      })
    );
  }

  indexChangedHandler = (e: CustomEvent<number>) => {
    this.navbarIdx = e.detail;

    localStorage.setItem("navbar-index", this.navbarIdx.toString());
  };

  render() {
    return html`
      <section>
        <div class="screen">
          ${this.modeList.map(
            (tagName, _idx) => html`
              <article
                style=${styleMap({
                  display: this.navbarIdx === _idx ? "block" : "none",
                })}
              >
                ${unsafeHTML(`<${tagName}></${tagName}>`)}
              </article>
            `
          )}
        </div>
        <app-bottom-navbar
          @indexchanged=${this.indexChangedHandler}
        ></app-bottom-navbar>
      </section>
    `;
  }
}
