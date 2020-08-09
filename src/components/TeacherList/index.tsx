import React from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import styles from "./styles";
import PageHeader from "../PageHeader";
import TeacherItem from "../TeacherItem";

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys
Disponíveis"
      >
        <View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput
            style={styles.input}
            placeholder="Qual é a matéria? "
            placeholderTextColor="#c1bccc"
          />
          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da Semana</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual é o dia? "
                placeholderTextColor="#c1bccc"
              />
            </View>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual é o horário? "
                placeholderTextColor="#c1bccc"
              />
            </View>
          </View>
        </View>
      </PageHeader>
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

export default TeacherList;
