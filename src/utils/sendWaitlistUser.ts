

export async function sendWaitlistUser(email: string) {
  const res = await fetch("https://stardrop-beta.vercel.app/api/waitlist_add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  return res.json();
}