import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  AsyncStorage,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import styles from "./styles";
import PageHeader from "../PageHeader";
import TeacherItem, { Teacher } from "../TeacherItem";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import { Header } from "@react-navigation/stack";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState("");
  const [time, setTime] = useState("");

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersId = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );
        setFavorites(favoritedTeachersId);
      }
    });
  }

  function handleToggleFilterVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();
    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <PageHeader
          title="Proffys
Disponíveis"
          headerRight={
            <BorderlessButton onPress={handleToggleFilterVisible}>
              <Feather name="filter" size={20} color="#fff" />
            </BorderlessButton>
          }
        >
          {isFiltersVisible && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <RNPickerSelect
                onValueChange={(value) => setSubject(value)}
                items={[
                  { label: "Desenho", value: "Desenho" },
                  { label: "Filosofia", value: "Filosofia" },
                  { label: "Física", value: "Física" },
                  { label: "Francês", value: "Francês" },
                  { label: "Geografia", value: "Geografia" },
                  { label: "História", value: "História" },
                  { label: "Inglês", value: "Inglês" },
                  { label: "Matemática", value: "Matemática" },
                  { label: "Português", value: "Português" },
                  { label: "Química", value: "Química" },
                  {
                    value: "TIC",
                    label: "Tecnologias de Informação e Comunicação",
                  },
                ]}
              />
              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da Semana</Text>
                  <RNPickerSelect
                    onValueChange={(value) => setWeek_day(value)}
                    items={[
                      { label: "Domingo", value: "0" },
                      { label: "Segunda-feira", value: "1" },
                      { label: "Terça-feira", value: "2 " },
                      { label: "Quarta-feira", value: "3 " },
                      { label: "Quinta-feira", value: "4 " },
                      { label: "Sexta-feira", value: "5" },
                      { label: "Sábado", value: "6" },
                    ]}
                  />
                </View>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TextInput
                    style={styles.input}
                    value={time}
                    onChangeText={(text) => setTime(text)}
                    placeholder="Qual é o horário? "
                    placeholderTextColor="#c1bccc"
                  />
                </View>
              </View>
              <RectButton
                onPress={handleFiltersSubmit}
                style={styles.submitButton}
              >
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </RectButton>
            </View>
          )}
        </PageHeader>
        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        >
          {teachers.map((teacher: Teacher) => (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          ))}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

export default TeacherList;
