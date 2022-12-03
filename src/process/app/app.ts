import "./components/navbar/Navbar";
import "./components/main/Main.styled";

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
      grid-template-rows: auto 1fr;
      background-color: #000;
    }
  `;
  document.head.appendChild(initStyle);

  const root = document.getElementById("root");

  if (!root) return;

  root.innerHTML = `
      <app-navbar></app-navbar>
  
      <app-main></app-main>
  `;

  const appComponents = {
    navbar: root.querySelector("app-navbar"),
    main: root.querySelector("app-main"),
  };
})();
