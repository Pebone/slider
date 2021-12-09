// import logo from './logo.svg';
import './App.css';
import Slider from './components/imageSlider.jsx'
import SliderData from './components/sliderData.jsx'

function App() {
  return (
    <div className="App">
      <Slider slides = {SliderData}></Slider>
    </div>
  );
}

export default App;
