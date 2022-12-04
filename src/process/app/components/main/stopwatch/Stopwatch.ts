import { html, LitElement, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";

import styles from "./Stopwatch.scss";

@customElement("app-stopwatch")
class Stopwatch extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="container">
        <section class="time-container"></section>

        <div class="button-container">
          <button class="cancel ios-btn-cir ios-btn-disable">
            <span>랩</span>
          </button>
          <button class="start ios-btn-cir">
            <span>시작</span>
          </button>
        </div>

        <ul class="laps-list"></ul>
      </div>
    `;
  }
}
