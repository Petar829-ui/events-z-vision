import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Partnerships from './pages/Partnerships';
import Corporate from './pages/Corporate';
import Teambuildings from './pages/Teambuildings';
import Company from './pages/Company';
import Conferences from './pages/Conferences';
import Training from './pages/Training';
import Entertainment from './pages/Entertainment';
import MixedTeambuildings from './pages/MixedTeambuildings';
import Blog2 from './pages/Blog2';
import Weddings from './pages/Weddings';
import Personal from './pages/Personal';
import PersonalCelebrations from './pages/PersonalCelebrations';
import ZExperience from './pages/ZExperience';
import AuthorsZ from './pages/AuthorsZ';
import Personalized from './pages/Personalized';
import Product from './pages/Product';
import Delivery from './pages/Delivery';
import Politics from './pages/Politics';
import Politicsfor from './pages/Politicsfor';
import Generalterms from './pages/Generalterms';
import Contacts from './pages/Contacts';
import Inquiry from './pages/Inquiry';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>Product
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path='/corporate' element={<Corporate />} />
          <Route path='/Teambuildings' element={<Teambuildings />} />
          <Route path='/Company' element={<Company />} />
          <Route path='/Conferences' element={<Conferences />} />
          <Route path='/Training' element={<Training />} />
          <Route path='/Entertainment' element={<Entertainment />} />
          <Route path='/MixedTeambuildings' element={<MixedTeambuildings />} />
          <Route path='/Blog2' element={<Blog2 />} />
          <Route path='/Weddings' element={<Weddings />} />
          <Route path='/Personal' element={<Personal />} />
          <Route path='/PersonalCelebrations' element={<PersonalCelebrations />} />
          <Route path='/ZExperience' element={<ZExperience />} />
          <Route path='/AuthorsZ' element={<AuthorsZ />} />
          <Route path='/Personalized' element={<Personalized />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Delivery' element={<Delivery />} />
          <Route path='/Politics' element={<Politics />} />
          <Route path='/Politicsfor' element={<Politicsfor />} />
          <Route path='/Generalterms' element={<Generalterms />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;