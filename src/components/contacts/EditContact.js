import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }
  //   onNameChange = e => {
  //     this.setState({ name: e.target.value });
  //   };
  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    //check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const updateContact = {
      name,
      email,
      phone
    };
    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );
    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    //Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    //gå till andra sidan-> home
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmitHandler.bind(this, dispatch)}>
                  <TextInputGroup
                    lable="name"
                    name="name"
                    placeholder="Enter Name ..."
                    value={name}
                    onChange={this.onChangeHandler}
                    error={errors.name}
                  />
                  <TextInputGroup
                    lable="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email ..."
                    value={email}
                    onChange={this.onChangeHandler}
                    error={errors.email}
                  />
                  <TextInputGroup
                    lable="Phone"
                    name="phone"
                    placeholder="Enter Phone ..."
                    value={phone}
                    onChange={this.onChangeHandler}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Uppdate Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
