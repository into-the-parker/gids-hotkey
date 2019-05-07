import React from 'react';
import TopNav from '../components/topnav.js';
import SideMenu from '../components/sideMenu.js'
import MainContent from '../components/mainContent.js';

function App() {
  return (
    <div id="root">
      <TopNav/>
      <MainContent />
      <SideMenu />
    </div>
  );
}

export default App;
