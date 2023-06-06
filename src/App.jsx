import React from "react";

import SideContent from "./components/SideContent";
import SideRow from "./components/SideRow";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

import CardSlider from "./components/SlideShow";
import ImageSlider from "./components/ImgSlider";
import CardBox from "./components/CardComp";

export default function App() {
  const images = [
    "src/assets/imgs/award.jpeg",
    "https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1607490703747-0519d2e398a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <Header />
      <Navbar />
      <SideRow>
        <SideContent />
        <MainContent />
        
      </SideRow>

      <Footer />
    
    
      
    </div>
  );
}
