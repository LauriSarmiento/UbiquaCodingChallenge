import Button from "./Button";
import { VscArrowLeft } from "react-icons/vsc";
import { Link, Switch, Route } from "react-router-dom";

const Header = ({ title }) => {
  return (
      <header className="header">
        <Switch>
          <Route path="/Detail">
            <h1>
            <Link to="/"><VscArrowLeft></VscArrowLeft></Link>
              {/* < goBack={goBack} /> */}
              Pokemon Detail
            </h1>
          </Route>
          <Route path="/Pokedex">
            <h1>
            <Link to="/"><VscArrowLeft></VscArrowLeft></Link>
              {/* <VscArrowLeft goBack={goBack} /> */}
              My Pokedex
            </h1>
          </Route>
          <Route path="/">
            <h1>{title}</h1>
            <Link to="Pokedex"><Button color="red" text="My Pokedex"  /></Link>
          </Route>
        </Switch>
      </header>
  );
};

Header.defaultProps = {
  title: "Digital Pokedex",
};
export default Header;
