import "./components/navbar/Navbar";
import "./components/main/Main.styled";
import "./components/bottom-navbar/BottomNavbar";

(() => {
  const initStyle = document.createElement("style");
  initStyle.innerHTML = `
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    main {
      height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr auto;
      background-color: #000;
    }
  `;
  document.head.appendChild(initStyle);

  const root = document.getElementById("root");

  if (!root) return;

  root.innerHTML = `
      <app-navbar></app-navbar>
  
      <app-main></app-main>

      <app-bottom-navbar></app-bottom-navbar>
  `;

  const appComponents = {
    navbar: root.querySelector("app-navbar"),
    main: root.querySelector("app-main"),
    bottomNavbar: root.querySelector("app-bottom-navbar"),
  };

  const idx = localStorage.getItem("bottom-navbar-index") || 0;

  appComponents.bottomNavbar?.dispatchEvent(
    new CustomEvent("from-app", { detail: { idx } })
  );

  window.addEventListener(
    "from-bottom-navbar",
    (e: CustomEvent<{ idx: number }>) => {
      const _idx: number = e.detail.idx;

      appComponents.main?.dispatchEvent(
        new CustomEvent("from-app", { detail: { idx: _idx } })
      );
    }
  );
})();
