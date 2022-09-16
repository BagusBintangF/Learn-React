import logo from './logo.svg';
import './App.css';
import Welcome from './component/statelessComponent';
import Clock from './component/statefullComponent';
import EventHamdler from './component/eventHamdler';
import ToogleComponent from './component/toogleComponent';
import LoggingButton from './component/loggingButton';

function App() {
  return (
    <div className="App">
        <Welcome name="Bintang" />
        <Welcome name="Bagus" />
        <Welcome name="Febianda" />
        <Clock />
        <EventHamdler/>
        <ToogleComponent/>
        <LoggingButton/>
    </div>
  );
}

export default App ;
