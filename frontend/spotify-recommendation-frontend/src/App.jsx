import { useState } from 'react';
import "./styles/globals.css"
import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from './components/HeroComponent';

export default function App() {
  return (
    <div className='app'>
      <HeaderComponent/>
      <HeroComponent />
    </div>
  )
}


