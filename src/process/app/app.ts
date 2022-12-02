import './components/navbar/Navbar';
import './components/main/Main'
import './components/bottom-navbar/BottomNavbar';

(() => {
  const root = document.getElementById('root');
  
  if (!root) return;

  root.innerHTML = `
      <app-navbar></app-navbar>
  
      <app-main></app-main> 

      <app-bottom-navbar></app-bottom-navbar>
  
  `;
})();
