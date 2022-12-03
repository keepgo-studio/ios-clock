import { html, css, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import SoundbarsSVG from "@assets/soundbars.svg";
// TODO: has to map each other for internet and weather
import InternetOnSVG from "@assets/internet.on.svg";
import WeatherSVG from "@assets/weather/sunset.fill.svg";
import styles from "./Navbar.scss";

import "@widgets/SVGWidget.styled";

const ICON_WIDTH = 15;
@customElement("app-navbar")
class Navbar extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  protected render(): unknown {
    return html`
      <nav>
        <div class="current-time">
          <span class="hour">00</span>
          <span class="min">00</span>
        </div>

        <ul class="status-list">
          <li>
            <app-svg-widget
              .width=${ICON_WIDTH}
              .height=${ICON_WIDTH}
              .data=${SoundbarsSVG}
              .fill=${"#fff"}
            ></app-svg-widget>
          </li>
          <li>
            <app-svg-widget
              .width=${ICON_WIDTH}
              .height=${ICON_WIDTH}
              .data=${InternetOnSVG}
              .fill=${"#fff"}
            ></app-svg-widget>
          </li>
          <li>
            <app-svg-widget
              .width=${ICON_WIDTH}
              .height=${ICON_WIDTH}
              .data=${WeatherSVG}
              .fill=${"#fff"}
            ></app-svg-widget>
          </li>
        </ul>
      </nav>
    `;
  }
}
