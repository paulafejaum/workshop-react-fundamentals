import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

class Destructuring extends Component {
  constructor(props) {
    super(props);

    this.data = {
      response: {
        name: "Paula",
        hairColor: "Blond",
        tattoo: true,
        job: {
          enterprise: "Banco do Brasil",
          address: "Sede III"
        }
      }
    };
  }

  render() {
    const tattoo = this.data.response.tattoo;

    // Exercise 1
    // Get name, hairColour destructuring this.data object.
    const { name, hairColor } = this.data.response;


    // Exercise 2
    // Get favoriteFood from this.data. Chocolat is the default value.
    const { favoriteFood = 'chocolat' } = this.data.response;

    // Exercise 3
    // Get jobEnterprise and address destructuring from this.data.
    const { job: { enterprise: jobEnterprise, address } } = this.data.response;

    // Exercise 4
    // Change initialHairCoulour to hairColor of this.data
    let initialHairColor = "Red";
    ({ hairColor: initialHairColor } = this.data.response);

    // Exercise 5
    // Get tattoo from this.data in a variable called hasTattoo;
    const { tatto: hasTattoo } = this.data.response;

    // Exercise 6
    // Populate object in the following format using destructuring:
    // { employeeName, jobEntreprise, address}
    const newObject = {};
    ({
      name: newObject.employeeName,
      job: { enterprise: newObject.jobEnterprise, address: newObject.address }
    } = this.data.response
    );


    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>{`${newObject.jobEnterprise} : ${newObject.address}`}</Text>
        </View>
        <View>
          <Text style={styles.text}>Name: {newObject.employeeName}</Text>
          <Text style={styles.text}>Hair Colour: {hairColor}</Text>
          <Text style={styles.text}>Initial Hair Colour: {initialHairColor}</Text>
          <Text style={styles.text}>Tattoo: {hasTattoo ? "Yes" : "No"}</Text>
          <Text style={styles.text}>Favorite Food: {favoriteFood}</Text>
        </View>
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
