import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  Button,
} from "react-native";
import { auth } from "../firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    setLoading(true);
    if (!email && !password) {
      setError("Email & Password is required");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <View>
      <Text>Login</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="johndoe@gmail.com"
        inputMode="email"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="******"
        secureTextEntry={true}
      />

      <Button title="Login" onPress={handleLogin} />

      {error && <Text>{error}</Text>}
      {loading && <ActivityIndicator size="small" color="#0000ff" />}
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