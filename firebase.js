import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getAuth

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

getFirestore

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey:
"AIzaSyACnjP2U-PSsmtRGcQrfueeByZOlzamWtc",

authDomain:
"sfx-heatmap.firebaseapp.com",

projectId:
"sfx-heatmap",

storageBucket:
"sfx-heatmap.firebasestorage.app",

messagingSenderId:
"668414418580",

appId:
"1:668414418580:web:7be0f2dba925b8be149e81"

};

const app =
initializeApp(firebaseConfig);

export const auth =
getAuth(app);

export const db =
getFirestore(app);
