const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addMessage = functions.https.onRequest((req, res) => {
	console.log("this is a test")
	return "this is a test"
})

exports.helloWorld = function helloWorld (req, res) {
	if (req.body.message === undefined) {
		// This is an error case, as "message" is required
		res.status(400).send('No message defined!');
	} else {
		// Everything is ok
		console.log(req.body.message);
		res.status(200).end();
	}
};
