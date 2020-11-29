import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import generateStore from './Redux/store';
/*Components*/
import Layout from "./Components/Layout/Layout";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
/*Components*/
/*Pages*/
import Gifs from "./Pages/Gifs";
import Home from "./Pages/Home";
import Details from './Pages/Details';
import Trending from './Pages/Trending'
import Favorites from "./Pages/Favorites";
/*Pages*/
function App() {
  const store = generateStore();
  return (
    <div className="App">
      <Layout>
        <Header />
        <Search />
        <Provider store={store} >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/gifs/:keyword" component={Gifs} />
            <Route path="/gif/:id" component={Details} />
            <Route path="/trends" component={Trending} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </Provider>
      </Layout>
    </div>
  );
}

export default App;
