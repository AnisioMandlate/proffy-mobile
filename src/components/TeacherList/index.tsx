import React from "react";
import { View, ScrollView } from "react-native";
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
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
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

export default TeacherList;
