import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getAuth

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

apiKey: "YOUR_FIREBASE_APIKEY",

authDomain:
"YOUR_PROJECT.firebaseapp.com",

projectId:
"YOUR_PROJECT",

storageBucket:
"YOUR_PROJECT.appspot.com",

messagingSenderId:
"123456789",

appId:
"YOUR_APP_ID"

};

const app =
initializeApp(firebaseConfig);

export const auth =
getAuth(app);
