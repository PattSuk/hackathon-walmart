import './style/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import SpinachQuesadillas from './pages/SpinachQuesadillas';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/spinach-quesadillas" component={SpinachQuesadillas} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;