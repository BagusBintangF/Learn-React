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
import ListComponent from './component/ListComponent';
import NumberList from './component/KeyUsage';
import Blog from './component/UniqueKey';

const messages = ['React'];
const numbers = [1,2,3,4,5,6]
const posts=[
  {id:1, title:'Hello World', content:'Welcome to learning React!'},
  {id:2, title:'Instalation', content:'Youcan install react from npm'}
];

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
        <ListComponent numbers={numbers}/>
        <NumberList numbers={numbers}/>
        <Blog posts={posts} />
    </div>
  );
}

export default App ;
