import React, { Component } from "react";
//import PropTypes from "prop-types";
import { Consumer } from "../../../src/context";
import { Link } from "react-router-dom";
import axios from "axios";

class Contact extends Component {
  //static PropTypes = {
  // name: PropTypes.string.isRequired,
  // email: PropTypes.number.isRequired
  // };
  state = {
    showInfo: false
  };

  onShowClick = e => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  // onDeleteClick = (id, dispatch) => {
  //   dispatch({ type: "DELETE-CONTACT", payload: id });
  // };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE-CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE-CONTACT", payload: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props.info;
    const { showInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-trash"
                  style={{ cursor: "pointed", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt "
                    style={{
                      cursor: "pointed",
                      float: "right",
                      color: "green",
                      marginRight: "1.5rem"
                      // onClick:{this.editContactHandler}
                    }}
                  />
                </Link>
              </h4>
              {showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">email: {email}</li>
                  <li className="list-group-item">phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
