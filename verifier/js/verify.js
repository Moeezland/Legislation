import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// Get the last part of the URL
const params = new URLSearchParams(window.location.search);
const documentId = params.get("id");

// HTML Elements
const loading = document.getElementById("loading");
const verified = document.getElementById("verified");
const failed = document.getElementById("failed");

const id = document.getElementById("documentId");
const gazette = document.getElementById("gazette");
const decree = document.getElementById("decree");
const decreeRow = document.getElementById("decreeRow");
const status = document.getElementById("status");

if (!documentId) {

    document.getElementById("loading").style.display = "none";
    document.getElementById("failed").style.display = "block";

    document.querySelector("#failed p").textContent =
        "No legislation number was provided.";

    throw new Error("Missing legislation number.");

}

// Read Firestore
const ref = doc(db, "verification", documentId);

const snap = await getDoc(ref);

loading.style.display = "none";

if (snap.exists()) {

    const data = snap.data();

    id.textContent = documentId;

    gazette.textContent = data["Gazette"];

    status.textContent = data["Enforced"] ? "Enforced" : "Not Enforced";

    if (data["Emiri decree"]) {

        decree.textContent = data["Emiri decree"];

        decreeRow.style.display = "flex";

    }

    verified.style.display = "block";

}
else{

    failed.style.display = "block";

}