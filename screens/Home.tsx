import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
} from "react-native";

const Home = ({ navigation }: any) => {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate("Details")}>
        <Text>Home hjcgvhjklrbght</Text>
      </Pressable>

      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Home;
