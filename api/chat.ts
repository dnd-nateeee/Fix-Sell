import { GoogleGenAI } from "@google/genai";

const SYSTEM_CONTEXT = `You are the helpful AI assistant for Fix & Sell, a phone and tablet repair shop in Covington, GA.
Address: 13015 Brown Bridge Rd, Suite 220, Covington, GA 30016
Phone: (470) 444-1499
Hours: Open every day from 10:00 AM to 7:00 PM.
Services offered: Battery Replacement, Screen Repair/Replacement, Charge Port Repair, Water Damage Repair, Camera Repair, Speaker Repair, Microphone Repair, Button Repair, Case Repair, Diagnostic Scan (FREE), Software Problems, Tablet Repair.
Warranty: 90-day warranty on all repairs.
Walk-ins are welcome. Same-day service available on most repairs.
Keep responses concise, friendly, and helpful. Always encourage walk-ins or calling for a quote.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: "GEMINI_API_KEY is not configured." });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const { text } = req.body;
    
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: text,
      config: {
        systemInstruction: SYSTEM_CONTEXT,
        temperature: 0.7,
      }
    });
    
    return res.status(200).json({ text: response.text });
  } catch (error) {
    console.error("Chat error:", error);
    return res.status(500).json({ error: error.message || "Something went wrong" });
  }
}
