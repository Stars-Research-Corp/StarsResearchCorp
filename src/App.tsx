import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import JoinSection from './components/JoinSection';
import PlaceholderSections from './components/PlaceholderSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <JoinSection />
      <PlaceholderSections />
      <Footer />
    </div>
  );
}

export default App;