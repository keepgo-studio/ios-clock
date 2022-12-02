import { html, LitElement, unsafeCSS } from "lit";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement } from "lit/decorators.js";

import GlobeSvg from '@assets/globe.svg';

import styles from './BottomNavbar.scss';

@customElement("app-bottom-navbar")
class Footer extends LitElement {

  static styles = unsafeCSS(styles);

  render() {
    return html`
      <footer>
        <ul class="nav-icon-list">
          <li class="world-clocks">
            ${unsafeHTML(GlobeSvg)}
          </li>

          <li class="alram"></li>

          <li class="stopwatch"></li>

          <li class="timer"></li>
        </ul>
      </footer>
    `;
  }
}
