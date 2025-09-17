
import './App.css';
import Body from './components/Body';
import Header from './components/header';
import Footer from './components/Footer';
import ClicksCounters from './components/ClicksCounters';
import MainButtons from './components/MainButtons';


function App() {
  

  return (
    <>
      <Header/>
      <Body/>
      <Footer/>

      {/*<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>*/}
      
    </>
  )
}

export default App

