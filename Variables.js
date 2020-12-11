import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Variables extends Component {
  constructor(props) {
    super(props);

    this.varFunction();
    this.letConstFunction();
  }

  varFunction = () => {
    message = "Hello guys! We're talking about vars!";
    var message;
    console.log(message);

    for (var i = 0; i < 3; i++) {
      // Exercise 1 - Change console.log to execute inside a setTimeout
      console.log(i);
    }

    if (true) {
      var trueMessage = "Inside true";
    } else {
      var falseMessage = "Inside false";
    }
    // Exercise 2 - Print true message
    // Exercise 3 - Print false message
    // Exercise 4 - Change if to false and verify console
  };

  letConstFunction = () => {
    message = "Hello guys! We're talking about let and const!";
    let message;
    console.log(message);

    for (let i = 0; i < 3; i++) {
      // Exercise 5 - Change console.log to execute inside a setTimeout
      console.log(i);
    }

    if (true) {
      var trueMessage = "Inside true";
    } else {
      var falseMessage = "Inside false";
    }
    // Exercise 6 - Print true message
    // Exercise 7 - Print false message

    // Exercise 8 - Declare un uninitialized const variable
  };

  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>Check console</Text>
        </View>
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
});

export default Variables;
