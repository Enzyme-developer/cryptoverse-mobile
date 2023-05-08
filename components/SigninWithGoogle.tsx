import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button, View } from "react-native";
import { auth } from "../firebaseConfig";

const provider = new GoogleAuthProvider();

const SigninWithGoogle = () => {

  const handleGoogleSignup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <View>
      <Button title="Signin with Google" onPress={handleGoogleSignup} />
    </View>
  );
};

export default SigninWithGoogle;
