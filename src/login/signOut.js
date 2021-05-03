// Import firebaseConfig
import { firebase } from "../config/firebase.pub";

const signOut = async () => {
  try {
    await firebase.auth().signOut();
  } catch (e) {
    console.error(e);
  }
};

export default signOut;