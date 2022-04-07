import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://miro.medium.com/max/500/0*31d5Ef1swqFZRisF.png",
        }}
      />
      <Text style={styles.txt}>Mari kita belajar React Native</Text>
      <Button title="Click Me" color="blue" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 30,
  },
  img: {
    height: 100,
    width: 100,
  },
});
