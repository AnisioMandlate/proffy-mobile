import React from "react";
import { View, Image, Text, TouchableOpacity, Button } from "react-native";
import styles from "./styles";
import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassIcon from "../../assets/images/icons/give-classes.png";

const Landing = () => {
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonSecundary]}>
          <Image source={giveClassIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;
