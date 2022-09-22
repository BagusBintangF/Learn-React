import './App.css';
import Welcome from './component/statelessComponent';
import Clock from './component/statefullComponent';
import EventHamdler from './component/eventHamdler';
import ToogleComponent from './component/toogleComponent';
import LoggingButton from './component/loggingButton';
import {UserGreeting, GuestGreeting, Greeting} from './component/ConditionalRendering'
import {LoginButton, LogoutButton, LoginControl} from './component/ElementVariable'
import LogicalOperator from './component/LogicalOperator';
import PreventRendering from './component/PreventRendering';

const messages = ['React'];

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
        <LogicalOperator unreadMessages={messages}/>
        <PreventRendering/>
    </div>
  );
}

export default App ;
