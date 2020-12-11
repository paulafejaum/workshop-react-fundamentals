import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";


const Title = ({ name }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Welcome, {name}</Text>
    </View>
  );

}

const styles = StyleSheet.create({

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

export default Title;