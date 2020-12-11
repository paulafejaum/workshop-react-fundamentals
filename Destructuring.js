import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

class Destructuring extends Component {
  constructor(props) {
    super(props);

    this.data = {
      response: {
        name: "Paula",
        hairColour: "blond",
        tattoo: true,
        job: {
          enterprise: "Banco do Brasil",
          address: "Sede III"
        }
      }
    };
  }

  render() {
    const name = this.data.response.name;
    const hairColour = this.data.response.hairColour;
    const tattoo = this.data.response.tattoo;
    const jobEnterprise = this.data.response.job.enterprise;
    const address = this.data.response.job.address;

    // Exercise 1
    // Get name, hairColour destructuring this.data object.

    // Exercise 2
    // Get favoriteFood from this.data. Chocolat is the default value.

    // Exercise 3
    // Get jobEnterprise and address destructuring from this.data.

    // Exercise 4
    // Change initialHairCoulour to hairColor of this.data
    let initialHairCoulour = "Red";

    // Exercise 5
    // Get tattoo from this.data in a variable called hasTattoo;

    // Exercise 6
    // Populate object in the following format using destructuring:
    // { employeeName, jobEntreprise, address}

    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>{`${jobEnterprise} : ${address}`}</Text>
        </View>
        <View>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Hair Colour: {hairColour}</Text>
          <Text style={styles.text}>Tattoo: {tattoo ? "Yes" : "No"}</Text>
        </View>
        <Button onPress={() => { }} title="Example button" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    flex: 1
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

export default Destructuring;
