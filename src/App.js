import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent'
import ModelS from './assets/images/Desktop-ModelS.jpeg'
import Model3 from './assets/images/Desktop-Model3.jpeg'
import ModelX from './assets/images/Desktop-ModelX.jpeg'
import ModelY from './assets/images/Desktop-ModelY.jpeg'
import SolarPanels from './assets/images/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/images/Desktop-SolarRoof.jpeg'
import Accessories from './assets/images/Desktop-Accessories.jpg'


function App() {
  return (
      <div id="app">
        <Header />
        <div className="app_contents">
          <MainContent 
            title = "Model S"
            desc = "Order Online for Touchless Delivery"
            descLink = ""
            backgroundImg = {ModelS} 
            leftBtnTxt = 'CUSTOM ORDER '
            leftBtnLink = ""
            rightBtnTxt = 'EXISTING INVENTORY'
            rightBtnLink = ''
            twoButtons = 'true'
           first
          />
        
         <MainContent 
            title = "Model Y"
            desc = "Order Online for Touchless Delivery"
            descLink = ""
            backgroundImg = {ModelY}
            leftBtnTxt = 'CUSTOM ORDER '
            leftBtnLink = ""
            rightBtnTxt = 'EXISTING INVENTORY'
            rightBtnLink = ''
            twoButtons = 'true'
          />

          <MainContent 
            title = "Model 3"
            desc = "Order Online for Touchless Delivery"
            descLink = ""
            backgroundImg = {Model3}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = ""
            rightBtnTxt = 'EXISTING INVENTORY'
            rightBtnLink = ''
            twoButtons = 'true'
          />
         <MainContent 
            title = "Model X"
            desc = "Order Online for Touchless Delivery"
            descLink = ""
            backgroundImg = {ModelX}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = ""
            rightBtnTxt = 'EXISTING INVENTORY'
            rightBtnLink = ''
            twoButtons = 'true'
          />
          <MainContent 
            title = "Lowest Cost Solar Panles in America"
            desc = "Money-back guarantee"
            descLink = ""
            backgroundImg = {SolarPanels}
            leftBtnTxt = 'ORDER NOW'
            leftBtnLink = ""
            rightBtnTxt = 'LEARN MORE'
            rightBtnLink = ''
            twoButtons = 'true'   
          />
          <MainContent 
            title = "Solar for New Roofs"
            desc = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            descLink = ""
            backgroundImg = {SolarRoof}
            leftBtnTxt = ' ORDER NOW '
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            rightBtnLink = ''
            twoButtons = 'true' 
          />
          <MainContent 
            title = "Accessories"
            desc = ""
            descLink = ""
            backgroundImg = {Accessories}
            leftBtnTxt = 'SHOP NOW '
            leftBtnLink = ''
            rightBtnTxt = 'EXISTING INVENTORY'
            rightBtnLink = ''
          />
        </div>
      </div>
  );
}

export default App;
