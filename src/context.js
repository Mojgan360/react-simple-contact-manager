import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  //action är en object som har type
  switch (action.type) {
    case "DELETE-CONTACT": //"DELETE-CONTACT" är value av type
      return {
        ...state, //kalla den state som redan finns
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD-CONTACT": //"ADD-CONTACT" är vaur av type
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case "UPDATE_CONTACT": //"UPDATE-CONTACT" är vaur av type
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: "Cassio Zen",
      //   email: "cassiozen@gmail.com",
      //   phone: "333-888-999"
      // },
      // {
      //   id: 2,
      //   name: "Dan Abramov",
      //   email: "gaearon@somewhere.com",
      //   phone: "333-111-999"
      // },
      // {
      //   id: 3,
      //   name: "Pete Hunt",
      //   email: "floydophone@somewhere.com",
      //   phone: "333-000-444"
      // }
    ],
    //Dispatches an action. This is the only way to trigger a state change.
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(res => this.setState({ contacts: res.data }));
  // }

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
