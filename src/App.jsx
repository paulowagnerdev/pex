import './App.css'
import BannerComponent from './components/banner/BannerComponent';
import HeaderComponent from './components/header/HeaderComponent';
import MainComponent from './components/main/MainComponent';
import StatsComponent from './components/main/StatsComponent';
import ServicesComponent from './components/main/ServicesComponent';
import FooterComponent from './components/footer/FooterComponent';
import GaleryComponent from './components/main/GaleryComponent';

function App() {

  return (
    <>
      <HeaderComponent />  
      <BannerComponent />
      <MainComponent/>
      <StatsComponent />
      <ServicesComponent />
      <GaleryComponent />
      <FooterComponent />
    </>
  )
}

export default App
