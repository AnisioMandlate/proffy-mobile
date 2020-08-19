import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import {
  RectButton,
  TextInput,
  BorderlessButton,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";
import styles from "./styles";
import PageHeader from "../PageHeader";
import plusIcon from "../../assets/images/icons/plus.png";
import api from "../../services/api";

function GiveClasses() {
  const navigaition = useNavigation();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewSchedule() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });
    setScheduleItems(updatedScheduleItems);
  }

  function handleSubmit() {
    api.post("classes", {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    });
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <PageHeader title="Registe-se aqui para dar aulas." />

        <ScrollView
          style={[styles.teacherForm, { elevation: 4, zIndex: 10 }]}
          contentContainerStyle={{ paddingBottom: 16 }}
        >
          <View style={styles.form}>
            <View>
              <Text style={styles.titleFormText}>Seus dados</Text>
              <View style={styles.inputGroup}>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={(text) => setName(text)}
                  placeholder="Nome Completo"
                  placeholderTextColor="#32264d"
                />
                <TextInput
                  style={styles.input}
                  value={avatar}
                  onChangeText={(text) => setAvatar(text)}
                  placeholder="Avatar (https://www.example.com)"
                  placeholderTextColor="#32264d"
                />
                <TextInput
                  style={styles.input}
                  value={whatsapp}
                  onChangeText={(text) => setWhatsapp(text)}
                  placeholder="WhatsApp"
                  placeholderTextColor="#32264d"
                />
                <TextInput
                  style={styles.input}
                  value={bio}
                  onChangeText={(text) => setBio(text)}
                  placeholder="Biografia"
                  placeholderTextColor="#32264d"
                />
              </View>
            </View>
            <View>
              <Text style={styles.titleFormText}>Sobre a aula</Text>
              <View style={styles.inputGroup}>
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
                <TextInput
                  style={styles.input}
                  value={cost}
                  onChangeText={(text) => setCost(text)}
                  placeholder="Custo da aula por hora"
                  placeholderTextColor="#32264d"
                />
              </View>
            </View>
            <View>
              <View style={styles.inputTitleIcon}>
                <Text style={styles.titleIconText}>Horários disponíveis</Text>
                <BorderlessButton onPress={addNewSchedule}>
                  <Image
                    source={plusIcon}
                    resizeMode="contain"
                    style={{ tintColor: "#8257e5" }}
                  />
                </BorderlessButton>
              </View>
              {scheduleItems.map((scheduleItem, index) => {
                return (
                  <View key={scheduleItem.week_day}>
                    <View style={styles.inputGroup}>
                      <Text style={styles.label}>Dia da Semana</Text>
                      <RNPickerSelect
                        onValueChange={(value) =>
                          setScheduleItemValue(index, "week_day", value)
                        }
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
                    <View style={styles.inputGroupSide}>
                      <View style={styles.inputBlock}>
                        <TextInput
                          style={styles.input}
                          value={scheduleItem.from}
                          onChangeText={(text) =>
                            setScheduleItemValue(index, "from", text)
                          }
                          placeholder="Das"
                          placeholderTextColor="#c1bccc"
                        />
                      </View>
                      <View style={styles.inputBlock}>
                        <TextInput
                          style={styles.input}
                          value={scheduleItem.to}
                          onChangeText={(text) =>
                            setScheduleItemValue(index, "to", text)
                          }
                          placeholder="Até"
                          placeholderTextColor="#c1bccc"
                        />
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          <RectButton style={styles.okButton} onPress={handleSubmit}>
            <Text style={styles.okButtonText}>Salvar Cadastro</Text>
          </RectButton>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

export default GiveClasses;
