import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  // const onPressButton = () => {
  //   alert("버튼을 클릭하셨습니다.");
  // };

  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //     <Button title="상품 등록하기" onPress={onPressButton} />

  //   <TouchableOpacity onPress={}>
  //      <Image  />
  //   </TouchableOpacity>

  //   </View>
  // );
  return <WebView source={{ uri: "https://hyunswork.shop" }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
