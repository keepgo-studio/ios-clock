import { html, LitElement, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";

import GlobeSVG from "@assets/globe.svg";
import TimerSVG from "@assets/timer.svg";
import StopwatchSVG from "@assets/stopwatch.fill.svg";
import AlarmSVG from "@assets/alarm.fill.svg";
import styles from "./BottomNavbar.scss";

import "@widgets/SVGWidget.styled";

const SVG_WIDTH = 24;

@customElement("app-bottom-navbar")
class Footer extends LitElement {
  @state()
  idx?: number;

  iconsMap = [
    {
      svg: GlobeSVG,
      text: "세계 시계",
    },
    {
      svg: AlarmSVG,
      text: "알람",
    },
    {
      svg: StopwatchSVG,
      text: "스톱워치",
    },
    {
      svg: TimerSVG,
      text: "타이머",
    },
  ];

  static styles = unsafeCSS(styles);

  constructor() {
    super();

    this.addEventListener("init", (e: CustomEvent<number>) => {
      this.idx = e.detail;
    });
  }

  clickHandler(currentIdx: number) {
    this.idx = currentIdx;

    this.dispatchEvent(
      new CustomEvent("indexchanged", {
        detail: currentIdx,
        bubbles: false,
        composed: true,
      })
    );
  }

  render() {
    if (this.idx === undefined) return "";

    return html`
      <footer>
        <ul class="nav-icon-list">
          ${repeat(
            this.iconsMap,
            (item) => item.text,
            (item, _idx) => html`
              <li @click=${() => this.clickHandler(_idx)}>
                <app-svg-widget
                  .width=${SVG_WIDTH}
                  .height=${SVG_WIDTH}
                  .data=${item.svg}
                  .fill=${this.idx === _idx ? "#F1A33B" : "inherit"}
                ></app-svg-widget>
                <p
                  style=${styleMap({
                    color: this.idx === _idx ? "#F1A33B" : "inherit",
                  })}
                >
                  ${item.text}
                </p>
              </li>
            `
          )}
        </ul>
      </footer>
    `;
  }
}
