import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Nav from "./components/Navbar/Nav";
import RootNavigation from "./navigation";
import Auth from "./screens/Auth";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Auth />
      <Nav /> */}
      <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    minHeight: "100%",
    minWidth: "100%",
  },
});
