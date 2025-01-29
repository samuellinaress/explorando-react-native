import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import profilePhoto from "../../assets/profilePhoto.jpeg";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={profilePhoto} style={styles.image} />
      <Text style={styles.text}>Datos Personales:</Text>
      <Text style={styles.text}>Mi nombre es Samuel Linares</Text>
      <Text style={styles.text}>Matricula: 2023-0215</Text>
      <Text style={styles.text}>
        e-mail personal: samuellinares660@gmail.com
      </Text>
      <Text style={styles.text}>
        e-mail institucional: 20230215@itla.edu.do
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: 200, height: 200, borderRadius: 50, marginBottom: 10 },
  text: { fontSize: 18 },
});
