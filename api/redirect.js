export default async function handler(request, response) {
  const grupos = [
    "https://chat.whatsapp.com/LGWAZmg40B3Ekvn0KALHIq", // Grupo 1
    "https://chat.whatsapp.com/Jp4tcPTqWh4DqlrmxnP2TR", // Grupo 2
    "https://chat.whatsapp.com/I6n46y08RJvC3iwmtxsGbX", // Grupo 3
    "https://chat.whatsapp.com/Hrn0KsCAAYQF0aRBDMJCKF", // Grupo 4
    "https://chat.whatsapp.com/CjOzhLyhxoFCqT1NJ7fGYZ"  // Grupo 5
  ];

  try {
    const res = await fetch("https://api.countapi.xyz/hit/teambrujita/vercel");
    const data = await res.json();
    const index = (data.value - 1) % grupos.length;
    const destino = grupos[index];

    return response.writeHead(302, { Location: destino }).end();
  } catch (error) {
    return response.status(500).send("Error en la redirección global.");
  }
}
