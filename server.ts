import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_CONTEXT = `You are the helpful AI assistant for Fix & Sell, a phone and tablet repair shop in Covington, GA.
Address: 13015 Brown Bridge Rd, Suite 220, Covington, GA 30016
Phone: (470) 444-1499
Hours: Open every day from 10:00 AM to 7:00 PM.
Services offered: Battery Replacement, Screen Repair/Replacement, Charge Port Repair, Water Damage Repair, Camera Repair, Speaker Repair, Microphone Repair, Button Repair, Case Repair, Diagnostic Scan (FREE), Software Problems, Tablet Repair.
Warranty: 90-day warranty on all repairs.
Walk-ins are welcome. Same-day service available on most repairs.
Keep responses concise, friendly, and helpful. Always encourage walk-ins or calling for a quote.`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API constraints check
  const checkApiKey = (res: express.Response) => {
    if (!process.env.GEMINI_API_KEY) {
      res.status(500).json({ error: "GEMINI_API_KEY is not configured." });
      return false;
    }
    return true;
  };

  // AI Diagnostic endpoint
  app.post("/api/diagnostic", async (req, res) => {
    if (!checkApiKey(res)) return;
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const { prompt } = req.body;
      
      const extra = `The user described their device problem. Identify the most likely repair service needed from Fix & Sell's service list. Format: start with the service name in bold/caps, then a one-sentence diagnosis. Keep it under 80 words. Be encouraging.`;
      
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: SYSTEM_CONTEXT + '\n' + extra,
          temperature: 0.7,
        }
      });
      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Diagnostic error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Chat endpoint
  app.post("/api/chat", async (req, res) => {
    if (!checkApiKey(res)) return;
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
      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Chat error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
