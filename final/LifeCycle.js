import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Title from "./Title";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Teste",
      color: "red"
    };
  }

  updateTitle() {
    this.setState({ name: "Paula" });
  }

  render() {
    const { name } = this.state;
    return (
      <View style={styles.app}>
        <Title name={name} {...this.props} />
        <Button onPress={() => { this.updateTitle() }} title="Update Name" />
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