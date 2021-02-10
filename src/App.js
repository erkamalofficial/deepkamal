import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Footer from "./components/Footer"
import Weather from "./components/Weather"

function App() {
  return (
    <>
    {/* <SocialMedia/> */}
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/weather" component={Weather} />
          < Redirect to="/" />.
        </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
