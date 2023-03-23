// CSS 
import './index.css'

// COMPONENTS
import Footer from "./components/footer/Footer";
import ResponsiveLayout from './components/responsive-layout/Responsive';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <ResponsiveLayout />
      <Footer />
    </>
  );
}

export default App;
