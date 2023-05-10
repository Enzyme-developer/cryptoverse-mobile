import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Button,
  } from "react-native";
  
  const Details = ({ navigation }: any) => {
    return (
      <View>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text>Home </Text>
        </Pressable>
  
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button title="Go back Details" onPress={() => navigation.popToTop()} />
      </View>
    );
  };
  
  export default Details;
  