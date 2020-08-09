import React from "react";
import { View } from "react-native";
import styles from "./styles";
import PageHeader from "../PageHeader";

function Favourites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys Favoritos" />
    </View>
  );
}

export default Favourites;
