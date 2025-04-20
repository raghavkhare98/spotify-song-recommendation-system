import { useState } from 'react';
import "./styles/globals.css"
import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from './components/HeroComponent';
import FeatureComponent from './components/FeatureComponent';
import FooterComponent from './components/FooterComponent';

export default function App() {
  return (
    <div className='app'>
      <header>
        <HeaderComponent/>
      </header>
      <main>
        <HeroComponent />
        <FeatureComponent />
      </main>
      <FooterComponent />      
    </div>
  )
}


