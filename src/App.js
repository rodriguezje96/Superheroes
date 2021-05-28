import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import SearchResult from './components/SearchResult'
import CharProfile from './components/CharProfile'
import { HashRouter, Route } from "react-router-dom"; 
function App() {
  return (
    <HashRouter>
      <div className="App">
      <Route path={["/login"]} component={() => <Login />} />
      <Route path={["/home"]} component={() => <Home />} />
      <Route path={["/charProfile"]} component={CharProfile}/>
      <Route path={["/searchResult"]} component={() => <SearchResult />} />

      </div>
    </HashRouter>
  );
}

export default App;
