import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

// Configuración de Firebase (Team Orly)
const firebaseConfig = {
  apiKey: "AIzaSyD7mvF3tnOzMBCH3R7i1QMgsbKyneeyTSg",
  authDomain: "teamorly-c7cb0.firebaseapp.com",
  databaseURL: "https://teamorly-c7cb0-default-rtdb.firebaseio.com/",
  projectId: "teamorly-c7cb0",
  storageBucket: "teamorly-c7cb0.appspot.com",
  messagingSenderId: "54759106725",
  appId: "1:54759106725:web:c8e58eacad97b8aaabc54c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Enlaces de grupos del Team Brujita 🔮
const grupos = [
  "https://chat.whatsapp.com/LGWAZmg40B3Ekvn0KALHIq", // Grupo 1
  "https://chat.whatsapp.com/Jp4tcPTqWh4DqlrmxnP2TR", // Grupo 2
  "https://chat.whatsapp.com/I6n46y08RJvC3iwmtxsGbX", // Grupo 3
  "https://chat.whatsapp.com/Hrn0KsCAAYQF0aRBDMJCKF", // Grupo 4
  "https://chat.whatsapp.com/CjOzhLyhxoFCqT1NJ7fGYZ"  // Grupo 5
];

export default async function handler(req, res) {
  const contadorRef = ref(db, "contadorTeamOrly"); // MISMO contador global

  try {
    const snapshot = await get(contadorRef);
    let count = snapshot.exists() ? snapshot.val() : 0;

    const grupoIndex = count % grupos.length;
    const destino = grupos[grupoIndex];

    await set(contadorRef, count + 1);

    res.writeHead(302, { Location: destino });
    res.end();
  } catch (error) {
    res.status(500).send("Error en la redirección.");
  }
}
