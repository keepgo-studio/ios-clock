import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './Navbar.scss';

@customElement('app-navbar')
class Navbar extends LitElement {

  static styles = css`${unsafeCSS(styles)}`;

  protected render(): unknown {
    return html`
      <nav>
        <div class="current-time">
          <span class="hour">00</span>
          <span class="min">00</span>
        </div>
  
        
        <ul class="status-list">
          <li>
            <!-- sound icon -->
          </li>
          <li>
            <!-- wifi icon -->
          </li>
          <li>
            <!-- 알림 센터 icon -->
          </li>
        </ul>
      </nav>
    `;
  }
}