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
    var message; // This is a bad practice
    console.log(message);

    // Exercise 1 - Declare var message

    for (var i = 0; i < 3; i++) {
      // Exercise 2 - Change console.log to execute inside a setTimeout
      console.log(i);
    }

    if (true) {
      var trueMessage = "Inside true";
    } else {
      var falseMessage = "Inside false";
    }
    // Exercise 3 - Print true message
    // Exercise 4 - Print false message
    // Exercise 5 - Change if to false and verify console
  };

  letConstFunction = () => {
    message = "Hello guys! We're talking about let and const!";
    let message; // This is a bad practice and won't work using typescript.
    console.log(message);

    // Exercise 6 - Declare let message

    for (let i = 0; i < 3; i++) {
      // Exercise 7 - Change console.log to execute inside a setTimeout
      console.log(i);
    }

    if (true) {
      var trueMessage = "Inside true";
    } else {
      var falseMessage = "Inside false";
    }
    // Exercise 8 - Print true message
    // Exercise 9 - Print false message

    // Exercise 10 - Declare un uninitialized const variable
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
