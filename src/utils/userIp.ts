export async function getUserIp() {
  const res = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
  const text = await res.text();

  // Парсим "ip=..."
  const match = text.match(/ip=(.+)/);
  return match ? match[1].trim() : null;
}