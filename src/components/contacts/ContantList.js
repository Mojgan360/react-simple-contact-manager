import React, { Component } from "react";
//import { contacts } from "../ContactTemp";
import Contact from "./Contact";
import { Consumer } from "../../../src/context";

export default class ContantList extends Component {
  // state = {
  //   contacts: contacts
  // };

  // deletContant = id => {
  //   const { contacts } = this.state;
  //   console.log("hello delete item:   " + id);
  //   const newVContantsList = contacts.filter(contact => contact.id !== id);
  //   this.setState({
  //     contacts: newVContantsList
  //   });
  // };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div className="display-4 mb-2">
                <h1>
                  <span className="text-secondary">Contact</span> List
                </h1>
              </div>
              {contacts.map(item => {
                return <Contact key={item.id} info={item} />;
              })}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
