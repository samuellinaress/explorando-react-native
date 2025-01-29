import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function ExperienciaScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://www.youtube.com/embed/SkJFDV_COPE?si=B70nVKCLPgY2l08b",
        }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  webview: {
    width: 300,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
});
