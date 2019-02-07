import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContantList from "./components/contacts/ContantList";
import EditContact from "./components/contacts/EditContact";
import AddContact from "./components/contacts/AddContact";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import NotFound from "./components/layout/NotFound";
import Test from "./components/test/Test";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="myApp">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={ContantList} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />

                <Route exact path="/about/" component={About} />
                <Route exact path="/test/" component={Test} />
                <Route component={NotFound} />

                {/* <Route exact path="/about/:id" component={About} /> */}
                {/*från: About.js <h1>{this.props.match.params.id}</h1> */}
              </Switch>
              {/* <AddContact />
              <ContantList /> */}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
