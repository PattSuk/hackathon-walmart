import './style/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Recipe from './pages/Recipe';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipe" component={Recipe} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;