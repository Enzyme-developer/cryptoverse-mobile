import {
  ActivityIndicator,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const handleSignup = () => {
    setLoading(true);
    if (!email && !password) {
      setError("Email & Password is required");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <View>
      <Text>Signup</Text>

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
        onChangeText={(password) => setPassword(password)}
        placeholder="******"
        secureTextEntry={true}
      />

      <Button title="Signup" onPress={handleSignup} />

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

export default Signup;
