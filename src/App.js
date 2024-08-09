import AboutUs from './AboutUs';
import Footer from './Footer';
import Header1 from './Header1'
import Header2 from './Header2';
import Question from './Question';
import Services from './Services';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
function App() {
  return (
    <div>
      <Header1/>
      <Header2/> 
      <Services/>
      <Statistics/>
      <AboutUs/>
      <Testimonials/>
      <Question/>
      <Footer/>
    </div>
  );
}

export default App;