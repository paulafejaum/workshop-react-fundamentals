import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";


class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.data = {
      name: "Paula",
      color: "red"
    };
  }

  componentWillMount() {
    // Deprecated - Don't use it
  }

  componentDidMount() {
    // Exercise 1 - Change name for your name
  }

  componentWillUnmount() { }

  // Exercise 2 - Change this.data para state and update componentDidMount

  // Exercise 3 - Create component Title that receives the name to be shown

  // Exercise 4 - Propagate all props to the new component

  // Exercise 5 - Create ref for the component title

  // Exercise 6 - Implement method to update name of the component using ref

  // Exercise 7 - Change previous implementation to declarative form

  // Exercise 8 - Change class component to function component

  render() {
    const { name } = this.data;
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome, {name}</Text>
        </View>
        <Button onPress={() => { }} title="Update Name" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginVertical: 10,
    textAlign: "center"
  },
  text: {
    fontSize: 14,
    marginVertical: 5,
    textAlign: "center"
  },
});

export default LifeCycle;