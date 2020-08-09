import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavouriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import { RectButton } from "react-native-gesture-handler";

const TeacherItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{
            uri:
              "https://avatars2.githubusercontent.com/u/4643304?s=460&u=e9c051805fc50658102e4ee25b632b67c85ced3b&v=4",
          }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Anisio Mandlate</Text>
          <Text style={styles.subject}>Quimica</Text>
        </View>
      </View>
      <Text style={styles.bio}>A minha Biografia</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"  "}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <RectButton style={[styles.favouriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavouriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contacto</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
