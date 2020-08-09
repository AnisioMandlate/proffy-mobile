import React from "react";
import { View } from "react-native";
import styles from "./styles";
import PageHeader from "../PageHeader";
import TeacherItem from "../TeacherItem";

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys
Disponíveis"
      />
      <TeacherItem />
    </View>
  );
}

export default TeacherList;
