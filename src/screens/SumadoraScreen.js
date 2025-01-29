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

export default function SumadoraScreen() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(0);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          placeholder="valor 1"
          keyboardType="numeric"
          onChangeText={setNum1}
          style={styles.input}
        />
        <TextInput
          placeholder="Valor 2"
          keyboardType="numeric"
          onChangeText={setNum2}
          style={styles.input}
        />
        <Button
          title="Sumar"
          onPress={() => setResultado(Number(num1) + Number(num2))}
        />
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
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
