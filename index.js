const URL = "https://jiserranntipokqubswo.supabase.co/rest/v1/";
const ANON_KEY = process.env.SUPABASE_ANON_KEY;

async function keepAlive() {
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "apikey": ANON_KEY,
        "Authorization": `Bearer ${ANON_KEY}`
      }
    });
    console.log(`Respuesta de Supabase: ${response.status} ${response.statusText}`);
  } catch (error) {
    console.error("Error al conectar con Supabase:", error);
    process.exit(1);
  }
}

keepAlive();
