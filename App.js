import React from "react"
import Nav from "./Nav"
import Entry from "/Entry"
import data from "./data.js"

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  storageBucket: 'gs://traveljournal-988a1.appspot.com'
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
const itemsInStorage = ref(storage, "pictures")

export default function App() {
    console.log(itemsInStorage)
    const entries = data.map(item => {
        return  (
            <Entry
                {...item}
            />
        )
    })
    return (
        <div className="app-container">
            <Nav />
            {entries}
        </div>
    )
}