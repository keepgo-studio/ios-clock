import { html, LitElement, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";

import ArrowRightSVG from "@assets/chevron.right.svg";
import styles from "./Timer.scss";

import "@widgets/Dial";
import "@widgets/BottomUpSheet";

@customElement("app-timer")
class Timer extends LitElement {
  static styles = unsafeCSS(styles);

  @state()
  selectedSounds = [];

  @state()
  show = false;
  render() {
    return html`
      <div class="container">
        <app-dial></app-dial>

        <div class="button-container">
          <button class="cancel ios-btn-cir ios-btn-disable">
            <span>취소</span>
          </button>
          <button class="start ios-btn-cir">
            <span>시작</span>
          </button>
        </div>

        <div class="menu-container">
          <p>타이머 종료 시</p>

          <p>
            <span>${"전파 탐지기"}</span>
            <widget-svg
              .width=${12}
              .height=${12}
              .data=${ArrowRightSVG}
              .fill=${"#98989E"}
            ></widget-svg>
          </p>
        </div>
      </div>
      <widget-bottom-up-sheet .show=${this.show}></widget-bottom-up-sheet>
    `;
  }
}
