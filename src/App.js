import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ManageOrder from './components/ManageOrder/ManageOrder';
import MyOrder from './components/MyOrder/MyOrder';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/myOrder">
          <MyOrder></MyOrder>
        </Route>
        <Route path="/manageOrder">
          <ManageOrder></ManageOrder>
        </Route>
        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
