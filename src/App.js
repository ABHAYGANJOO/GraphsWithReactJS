import './App.css';
import LandingPage from './components/LandingPage';
import {Route , Switch , BrowserRouter} from 'react-router-dom';
import ThirdPartyAPI from './components/ThirdPartyAPI';
import ClipBoard from './components/ClipBoard'
import Optional from './components/Optional';

function App() {
  return (
    <div className="App" >
      <h1 style = {{backgroundColor: '#CCFFCC'}}>Please navigate to any of the 3 pages given below. :)</h1>
      <BrowserRouter>
      <LandingPage/>
      <Switch>
        <Route path='/third_party' component={ThirdPartyAPI} ></Route>
        <Route path='/clipboard' component={ClipBoard}/>
        <Route path='/optional' component={Optional}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
