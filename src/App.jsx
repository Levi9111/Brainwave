import Benefits from './Component/Benefits';
import Collaboration from './Component/Collaboration';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Pricing from './Component/Pricing';
import Roadmap from './Component/Roadmap';
import Services from './Component/Services';
import ButtonGradient from './assets/svg/ButtonGradient';

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
