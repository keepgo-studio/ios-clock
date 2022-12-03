import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import styles from "./Timer.scss";

import "@widgets/Dial";
import "@widgets/BottomUpSheet";

@customElement("app-timer")
class Timer extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="container">
        <app-dial></app-dial>

        <div class="button-container">
          <button class="cancel">
            <span>취소</span>
          </button>
          <button class="start-pause">
            <span>시작</span>
          </button>
        </div>

        <div class="menu-container">
          <app-bottom-up-sheet>
            <ul>
              <li>자명종 소리</li>
            </ul>
          </app-bottom-up-sheet>
        </div>
      </div>
    `;
  }
}
