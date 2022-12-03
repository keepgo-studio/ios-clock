import { css, html, LitElement, PropertyValueMap } from "lit";
import { customElement, query, state } from "lit/decorators.js";

import "./bottom-navbar/BottomNavbar";
import "./timer/Timer";

@customElement("app-main")
class Main extends LitElement {
  @state()
  navbarIdx = parseInt(localStorage.getItem("navbar-index") || "0");

  @query("app-bottom-navbar")
  BottomNavbar: Element;

  static styles = css`
    section {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    article {
      flex-grow: 1;
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
        <article>
          <app-world-clock></app-world-clock>

          <app-alarm></app-alarm>

          <app-stopwatch></app-stopwatch>

          <app-timer></app-timer>
        </article>

        <app-bottom-navbar
          @indexchanged=${this.indexChangedHandler}
        ></app-bottom-navbar>
      </section>
    `;
  }
}
