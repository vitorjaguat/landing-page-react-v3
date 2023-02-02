import './App.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import Slider from './components/Slider';
import Sliderslist from './components/Sliderslist';

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> INSIDE HERO!*/}
      <Hero imageSrc={img3} />
      <Section2 />
      <Sliderslist>
        <Slider
          imageSrc={img1}
          title='The impossible navigator'
          subtitle='Learn about Chinese science-fiction writer Cixin Liu, whose "The Three-Body Problem" trilogy was adapted into a TV series.'
        />
        <Slider
          flipped
          imageSrc={img2}
          title='Community libraries'
          subtitle='
View the list of associated community libraries and choose the one closest to you.'
        />
        <Slider
          imageSrc={img1}
          title='The impossible navigator'
          subtitle='Learn about Chinese science-fiction writer Cixin Liu, whose "The Three-Body Problem" trilogy was adapted into a TV series.'
        />
        <Slider
          flipped
          imageSrc={img2}
          title='Community libraries'
          subtitle='
View the list of associated community libraries and choose the one closest to you.'
        />
      </Sliderslist>
    </div>
  );
}

export default App;
