import React from "react";
import {
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RectButton, BorderlessButton } from "react-native-gesture-handler";
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
        <RectButton style={styles.okButton} onPress={handleNavigateBack}>
          <Text style={styles.okButtonText}>Salvar Cadastro</Text>
        </RectButton>
      </View>
    </KeyboardAvoidingView>
  );
}

export default GiveClasses;
