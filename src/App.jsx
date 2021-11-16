import './app.css';
import Containers from './components/containers/containers.jsx';

function App() {
  return (
    <div className={'grey-screen'}>
      <div className={'titles'}>
        <h1>Web Test</h1>
        <h2>Play with SWAPI</h2>
      </div>
    
      <Containers />
    </div>
  )
}

export default App
