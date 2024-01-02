import './App.css';
import Header from './Components/Header';
import { About, Download, SponsersAndPartners } from './Components/About';
import Details from './Components/Details';
import Footer from './Components/Footer';
import Info from './Components/Info';
import FAQ from './Components/FAQ';

function App() {

  const ToggleElement = FAQ.map(item => {
    return (
      <Info
        key={item.id}
        question={item.question}
        answer={item.answer}
      />
    )
  })
  

  return (
    <main>
      <Header/>
      <About />
      <Details />
      <Download />
      <div className="px-10">
        <h3 className="text-5xl mb-5 font-bold text-zinc-500 text-center">Frequently Asked Questions </h3>
        {ToggleElement}
      </div> 
      <SponsersAndPartners />
      <Footer />
    </main>
  );
}

export default App;
