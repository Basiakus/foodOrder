import firebase from "firebase";
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyC4QDizDtQHLh2UAb5-fW_UiFLCUbkgAj4",
	authDomain: "food-order-a10fb.firebaseapp.com",
	databaseURL: "https://food-order-a10fb.firebaseio.com"
});

const myBase = Rebase.createClass(firebaseApp.database());

export { firebaseApp }

export default myBase;