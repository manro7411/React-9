import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './component/MenuComponent';
import { Component } from 'react';
import { DISHES } from './shared/dishes';
import Main from './component/MainComponent';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;