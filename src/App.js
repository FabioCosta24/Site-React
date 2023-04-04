import './App.css';
import { NavbarHeader } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/BannerServiços';
import { BannerCasas } from './components/CasasDeMadeira';
import { BannerLenha } from './components/Lenha';
import { BannerJardinagem } from './components/Jardinagem';
import { BannerWhere } from './components/WhereAreWe';
import ContactForm from './components/Form';

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Banner />
      <BannerCasas />
      <BannerLenha />
      <BannerJardinagem  />
      <BannerWhere />
      <ContactForm />
    </div>
  );
}

export default App;
