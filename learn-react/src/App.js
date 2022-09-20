import logo from './logo.svg';
import './App.css';
import Welcome from './component/statelessComponent';
import Clock from './component/statefullComponent';
import EventHamdler from './component/eventHamdler';
import ToogleComponent from './component/toogleComponent';
import LoggingButton from './component/loggingButton';
import {UserGreeting, GuestGreeting, Greeting} from './component/ConditionalRendering'
import {LoginButton, LogoutButton, LoginControl} from './component/ElementVariable'


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
        <LoginButton/>
        <LogoutButton/>
        <LoginControl/>
    </div>
  );
}

export default App ;
