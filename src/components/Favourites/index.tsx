import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import PageHeader from "../PageHeader";
import TeacherItem from "../TeacherItem";

function Favourites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys Favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default Favourites;
