import React, { Component } from "react";
import { connect } from "react-redux";
import { personsFetchData } from "../actions/persons";
import "./App.css";

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.personsFetchData("/api/muggers");
    }, 3500);
  }

  render() {
    const { persons } = this.props;
    console.log(persons);
    return (
      <div className="App">
        <h1>Yes, it's work !</h1>
        <ul>
          {persons
            ? persons.map(person => {
                return <li key={person._id}>{person.name}</li>;
              })
            : "loading"}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    persons: store.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    personsFetchData: url => dispatch(personsFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
