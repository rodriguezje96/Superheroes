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
      <Route path={["/Login"]} component={() => <Login />} />
      <Route path={["/Home"]} component={() => <Home />} />
      <Route path={["/CharProfile"]} component={() => <CharProfile />} />
      <Route path={["/SearchResult"]} component={() => <SearchResult />} />

      </div>
    </HashRouter>
  );
}

export default App;
