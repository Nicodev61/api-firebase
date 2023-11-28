/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const nombreAléatoire = ()=>{

    let rand = Math.floor(Math.random()*100).toString();

    return rand;
}


 exports.apir = onRequest((request, response) => {
   logger.info("Hello logs!", {structuredData: true});
   response.send(nombreAléatoire());
 });
