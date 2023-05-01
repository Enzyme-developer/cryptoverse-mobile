import { Text, View, TextInput, ActivityIndicator, StyleSheet } from "react-native";

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
