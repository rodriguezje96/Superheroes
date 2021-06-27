import './App.css';
import Login from './components/login/Login';
import Home from './components/home/Home';
import SearchResult from './components/searchresults/SearchResult'
import CharProfile from './components//charprofile/CharProfile'
import { HashRouter, Route } from "react-router-dom"; 
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
function App() {
  return (
    <HashRouter>
      <div className="App">
      <Header></Header>
      <Route path={["/login"]} component={() => <Login />} />
      <Route exact path={["/home", "/"]} component={() => <Home />} />
      <Route path={["/charProfile"]} component={CharProfile}/>
      <Route path={["/searchResult"]} component={() => <SearchResult />} />
      <Footer></Footer>

      </div>
    </HashRouter>
  );
}

export default App;
