import firebase from "firebase"

//=============================================================
//     Firebase Initialization // copy and paste in future
//=============================================================

export const initializeFirebase = () => {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyDq89lR9atVS1pOtciNrmH_cWv-zpsyj7s",
		authDomain: "brenda-website.firebaseapp.com",
		databaseURL: "https://brenda-website.firebaseio.com",
		projectId: "brenda-website",
		storageBucket: "gs://brenda-website.appspot.com/",
		messagingSenderId: "402688962319"
	};

	console.log("initializing firebase ...")

	firebase.initializeApp(config);
}

//===============================================================
//        Other Future Config / Express / MongoDB / ...etc
//===============================================================

export const AccountEmail = "saxal28@gmail.com"