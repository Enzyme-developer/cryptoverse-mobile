import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  Button,
  Pressable,
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
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

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

      {/* <Button title="Login" onPress={handleLogin} /> */}
      <Pressable onPress={handleLogin} style={styles.pressed}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      {error && <Text style={styles.error}>{error}</Text>}
      {loading && <ActivityIndicator size="small" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    margin: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  input: {
    margin: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
    minWidth: "100%",
  },
  pressed: {
    backgroundColor: "blue",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSIze: 20,
    textAlign: "center",
  },
  error: {
    textAlign: "center",
    color: "red",
    fontWeight: "400",
    marginVertical: 10,
  },
});

export default Login;
