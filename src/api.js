export default async function fetchBalance() {
  const address = "9yoSLe1YphwruwE561GpSevRBBMoYwWM2ReWUYtCTNbp";
  const url = `https://server.avijusanjai.workers.dev/fetchData/${address}`;

  console.log("📡 Fetching balance from API...");

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ API Response:", data);

    return data;
  } catch (error) {
    console.error("❌ Error fetching balance:", error.message);
    return "Error";
  }
}
fetchBalance();
