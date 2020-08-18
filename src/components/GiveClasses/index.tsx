import React from "react";
import {
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import {
  RectButton,
  BorderlessButton,
  TextInput,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import giveClassBgImage from "../../assets/images/give-classes-background.png";
import PageHeader from "../PageHeader";

function GiveClasses() {
  const navigaition = useNavigation();

  function handleNavigateBack() {
    navigaition.goBack();
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <PageHeader
          title="Que incrível que você quer dar aulas."
          description="O primeiro passo, é preencher esse formulário de inscrição."
        />
        <ScrollView
          style={styles.teacherForm}
          contentContainerStyle={{ paddingBottom: 16 }}
        >
          <View style={styles.form}>
            <View>
              <Text style={styles.titleFormText}>Seus dados</Text>
              <View style={styles.inputGroup}>
                <TextInput
                  style={styles.input}
                  // value={time}
                  // onChangeText={(text) => setTime(text)}
                  placeholder="Nome Completo"
                  placeholderTextColor="#32264d"
                />
                <TextInput
                  style={styles.input}
                  // value={time}
                  // onChangeText={(text) => setTime(text)}
                  placeholder="Avatar (https://www.example.com)"
                  placeholderTextColor="#32264d"
                />
                <TextInput
                  style={styles.input}
                  // value={time}
                  // onChangeText={(text) => setTime(text)}
                  placeholder="WhatsApp"
                  placeholderTextColor="#32264d"
                />
              </View>
            </View>
          </View>
          <RectButton style={styles.okButton} onPress={handleNavigateBack}>
            <Text style={styles.okButtonText}>Salvar Cadastro</Text>
          </RectButton>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

export default GiveClasses;
