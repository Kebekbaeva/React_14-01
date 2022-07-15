import logo from './logo.svg';
import './App.css';

function AboutUs(props) {
  return (
      <>
        <h1>My project</h1>
        <div>{props.title}</div>
      </>
  )
}


function App() {
  return (
      <div className="App">
        <AboutUs title="React"/>
      </div>
  );
}


export default App;
