
const {onRequest} = require("firebase-functions/v2/https");

const {getFirestore} = require("firebase-admin/firestore");
const {initializeApp} = require("firebase-admin/app");
initializeApp();
exports.getCollection = onRequest(async (req, res) => {
  // Get a reference to the "cartes" collection
  const cartesRef = getFirestore().collection("cartes");
  // Get all documents from the "cartes" collection
  const snapshot = await cartesRef.get();
  // Map the documents to an array of data objects
  const messages = snapshot.docs.map(doc => doc.data());
  // Send the data back as a response
  res.json({ messages });
 });

 exports.addObject = onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.body;
  console.log(original)
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await getFirestore()
      .collection(original.collection)
      .add({symbole: original.symbole,
      couleur:original.couleur,
    figure:original.figure});
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});