import './App.css'
import Section from "./components/section";
import Button from "./components/button";

function App() {
  return (
    <div>
      <h1 className={'newTitleApp'}>NEW REACT PROJECT</h1>
      <Section title={'Section 1'} buttonName={'BUTT-1'} />
      <Section title={'Section 2'} buttonName={'BUTT-2'} />
      <button>AAAA</button>
      <Button text={'BBB'} />
    </div>
  )
}

export default App
