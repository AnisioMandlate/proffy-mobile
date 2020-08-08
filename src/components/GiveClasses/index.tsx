import React from "react";
import { View, ImageBackground } from "react-native";
import styles from "./styles";
import giveClassBgImage from "../../assets/images/give-classes-background.png";

function GiveClasses() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassBgImage}
        style={styles.content}
      ></ImageBackground>
    </View>
  );
}

export default GiveClasses;
