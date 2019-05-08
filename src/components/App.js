import React from 'react';
import TopNav from '../components/topnav.js';
import SideMenu from '../components/sideMenu.js'
import MainContent from '../components/mainContent.js';
import Gallery from '../components/test.js';
import SearchAppBar from '../components/menu.js';

function App() {
  return (
    <div id="root">
<SearchAppBar />
      <TopNav/>
      <MainContent />
      <SideMenu />
      <Gallery />
    </div>
  );
}

export default App;
