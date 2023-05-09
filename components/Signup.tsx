import {
  ActivityIndicator,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Pressable,
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
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup</Text>

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

      {/* <Button title="Signup" onPress={handleSignup} /> */}
      <Pressable onPress={handleSignup} style={styles.pressed}>
        <Text style={styles.buttonText}>Signup</Text>
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
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 20
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSIze: 20,
    textAlign: 'center',
  },
  error: {
    textAlign: "center",
    color: "red",
    fontWeight: "400",
    marginVertical:10
  },
});

export default Signup;
