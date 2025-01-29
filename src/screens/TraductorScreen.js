import react, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { unidades, decenas, centenas } from "../NumbersArray";

function convertirNumeroALetras(num) {
  if (num < 1 || num > 1000) return "Número fuera de rango";
  if (num === 1000) return "mil";
  if (num === 100) return "cien";

  let resultado = "";

  if (num >= 100) {
    let cent = Math.floor(num / 100);
    resultado += centenas[cent] + (num % 100 !== 0 ? " " : "");
    num %= 100;
  }

  if (num >= 10 && num <= 19) {
    resultado += especiales[num - 10];
  } else if (num >= 20) {
    let dec = Math.floor(num / 10);
    resultado += decenas[dec];
    if (num % 10 !== 0) resultado += " y ";
    num %= 10;
  }

  if (num >= 1 && num <= 9) {
    resultado += unidades[num];
  }

  return resultado;
}

export default function TraductorScreen() {
  const [numero, setNumero] = useState("");
  const [letra, setLetra] = useState("");

  function handlePress() {
    num = Number(numero);

    setLetra(convertirNumeroALetras(num));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Inserte un numero del 1 - 1000"
          keyboardType="numeric"
          onChangeText={setNumero}
        />
        <Button title="Traducir" onPress={handlePress} />
        <Text style={styles.resultado}>Texto: {letra}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
    fontSize: 18,
    textAlign: "center",
  },
  resultado: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
});
