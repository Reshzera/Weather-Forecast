import Home from "./Pages/Home";
import Erro404 from "./Pages/Erro 404";
import GlobalStyles from './styles/global'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"



function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={Erro404}/>
      </Switch>
    </Router>
  );
}

export default App;
