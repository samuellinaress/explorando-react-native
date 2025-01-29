import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function MultiplicarScreen() {
  const [numero, setNumero] = useState("");
  const [tabla, setTabla] = useState([]);

  function generarTabla() {
    const num = Number(numero);
    const array = [];

    for (let i = 1; i <= 13; i++) {
      array.push(`${num} x ${i} = ${num * i}`);
    }

    setTabla(array);
    Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Inserte un numero"
          keyboardType="numeric"
          onChangeText={setNumero}
        />
        <Button title="Generar Tabla" onPress={generarTabla} />
        <View style={styles.resultContainer}>
          {tabla.map((item, index) => (
            <Text key={index} style={styles.resultText}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  resultContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    color: "#333",
  },
});
