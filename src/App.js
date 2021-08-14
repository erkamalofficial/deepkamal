import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Market, Services, Covid19, Footer, HomePage, Navbar, Contact, SignIn, SignUp, Weather, SoftLinks } from "./components";

function App() {
  return (
    <>
    {/* <SocialMedia/> */}
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/covid-19" component={Covid19} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/weather" component={Weather} />
          < Redirect to="/" />.
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
