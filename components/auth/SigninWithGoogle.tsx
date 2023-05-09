import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button, View } from "react-native";
import { auth } from "../../firebaseConfig";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";


GoogleSignin.configure();
const provider = new GoogleAuthProvider();

const SigninWithGoogle = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  //   const handleGoogleSignup = () => {
  //     signInWithPopup(auth, provider)
  //       .then((result) => {
  //         const credential = GoogleAuthProvider.credentialFromResult(result);
  //         const token = credential?.accessToken;
  //         const user = result.user;
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         const credential = GoogleAuthProvider.credentialFromError(error);
  //       });
  //   };

  const signIn = async () => {
    // try {
    //   await GoogleSignin.hasPlayServices();
    // const userInfo = await GoogleSignin.signIn();
    //   console.log(userInfo);
    //   setloggedIn(true);
    // } catch (error: any) {
    //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //     alert("Cancel");
    //   } else if (error.code === statusCodes.IN_PROGRESS) {
    //     alert("Signin in progress");
    //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //     alert("PLAY_SERVICES_NOT_AVAILABLE");
    //   } else {
    //     // some other error happened
    //   }
    // }
//     try {
//         const result = await Expo.Google.logInAsync({
//           androidClientId: "Your Client ID",
//           //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
//           scopes: ["profile", "email"]

//         })
//         if (result.type === "success") {
//           const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
//              firebase.auth().signInAndRetrieveDataWithCredential(credential).then(function(result){
//                console.log(result);
//              });
//      this.props.navigation.navigate('Where you want to go');
//    } else {
//      console.log("cancelled")
//    }
//       } catch (e) {
//         console.log("error", e)
//       }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ["email"],
      webClientId:
        "80489344574-che2t0vn8aev8jbg37g1c95sa7f9lsqi.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true,
    });
  }, []);

  return (
    <View>
      <Button title="Signin with Google" onPress={signIn} />
    </View>
  );
};

export default SigninWithGoogle;
