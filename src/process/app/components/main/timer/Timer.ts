import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Picker } from "ios-ui";
import { interpret } from "xstate";
import TimerMachine from "./Timer.machine";

import ArrowRightSVG from "@assets/chevron.right.svg";
import styles from "./Timer.scss";

import "@widgets/Dial";
import "@widgets/BottomUpSheet";

const service = interpret(TimerMachine);

@customElement("app-timer")
class Timer extends LitElement {
  static styles = unsafeCSS(styles);

  @property()
  timerNumbers = [0, 0, 0];

  @state()
  selectedSounds = [];

  @state()
  show = false;

  @state()
  _state = service.initialState;

  constructor() {
    super();

    service.onTransition((s) => (this._state = s)).start();

    service.send("start");

    Picker.config("picker");
  }

  getResultListener({ detail }: CustomEvent<Array<number>>) {
    this.timerNumbers = [...detail];
  }

  render() {
    return html`
      <div class="container">
        <section class="${this._state.matches("idle") ? "" : "running"}">
          <ios-ui-picker
            width="100%"
            height="100%"
            num-list="24,24,24"
            title-list="시간,분,초"
            allow-key-event="true"
            event-name="getresult"
            @getresult=${this.getResultListener.bind(this)}
          ></ios-ui-picker>

          <div class="running-container">
            <div
              class="text-container
                ${this.timerNumbers[0] > 0 ? "with-hour" : "without-hour"}
                "
            >
              <span class="hour"
                >${this.timerNumbers[0].toString().padStart(2, "0")}</span
              >
              <span class="min"
                >${this.timerNumbers[1].toString().padStart(2, "0")}</span
              >
              <span class="sec"
                >${this.timerNumbers[2].toString().padStart(2, "0")}</span
              >
            </div>

            <svg class="progress">
              <circle cx="50%" cy="50%" r="20vh" class="frame"></circle>
              <circle cx="50%" cy="50%" r="20vh" class="bar"></circle>
            </svg>
          </div>
        </section>

        <div class="button-container">
          <button
            @click=${() => service.send("cancel")}
            class="cancel ios-btn-cir ${this._state.matches("idle")
              ? "ios-btn-disable"
              : ""}"
          >
            <span>취소</span>
          </button>
          <button
            class="start ${this._state.value} ios-btn-cir"
            @click=${() => {
              if (this._state.matches("idle")) {
                service.send("start");
              } else if (this._state.matches("running")) {
                service.send("stop");
              } else if (this._state.matches("pause")) {
                service.send("resume");
              }
            }}
          >
            <span>
              ${this._state.matches("idle") ? "시작" : ""}
              ${this._state.matches("running") ? "일시정지" : ""}
              ${this._state.matches("pause") ? "재개" : ""}
            </span>
          </button>
        </div>

        <div class="menu-container">
          <p>타이머 종료 시</p>

          <p>
            <span>${"전파 탐지기"}</span>
            <widget-svg
              .width=${13}
              .height=${13}
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
