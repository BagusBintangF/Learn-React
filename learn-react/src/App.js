import logo from './logo.svg';
import './App.css';
import Welcome from './component/statelessComponent';
import Clock from './component/statefullComponent';
import EventHamdler from './component/eventHamdler';
import ToogleComponent from './component/toogleComponent';
import LoggingButton from './component/loggingButton';
import {UserGreeting, GuestGreeting, Greeting} from './component/ConditionalRendering'


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
        <UserGreeting />
        <GuestGreeting/>
        <Greeting isLoggedIn={true} />
    </div>
  );
}

export default App ;
