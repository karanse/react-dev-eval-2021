
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Readme from "./components/readme";
import Home from "./components/home";

const useStyles = createUseStyles({});

function App(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.App}>
      <header className={classes.Header}>
        <h1>SlapSticker</h1>
        <p>
          Have you ever said something so dumb, you just wanted to slap
          yourself? Well now you can!
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/readme">readme</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/readme">
          <Readme/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
