import { Link, Switch, Route, Redirect } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Readme from "./components/Readme";
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import AppNavbar from "./components/AppNavbar";

const useStyles = createUseStyles((theme) => ({
  "@global body": {
    background: theme.palette.background,
    color: theme.palette.text,
    fontFamily: "sans-serif",
  },
  App: {
    minHeight: "100vh",
    background: theme.palette.background,
    fontFamily: "sans-serif",
    "& a": {
      color: "#fff",
    },
  },
  container: {
    margin: "auto",
    maxWidth: "800px",
    padding: "20px",
  },
  header: {
    marginBottom: 30,
  },
}));

function App(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.App}>
      <div className={classes.container}>
        <AppNavbar/>

      </div>
      <Introduction/>
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
