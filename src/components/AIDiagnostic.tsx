import React, { useState } from 'react';
import { motion } from 'motion/react';
import { fetchDiagnostic } from '../lib/api';

export function AIDiagnostic() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleDiagnose = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setResult("Analyzing...");
    try {
      const responseText = await fetchDiagnostic(prompt);
      // Basic formatting to bold **text**
      const formatted = responseText.replace(/\*\*(.*?)\*\*/g, '<strong class="text-accent">$1</strong>').replace(/\n/g, '<br>');
      setResult(formatted);
    } catch (e: any) {
      setResult(`<span class="text-accent2">${e.message || 'Could not connect to AI. Please call us at'} <a href="tel:+14704441499" class="text-accent">(470) 444-1499</a></span>`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="bg-dark border-y border-line py-16 md:py-24 px-4 md:px-12">
      <div className="font-display text-[12px] font-bold tracking-[0.2em] uppercase text-accent flex items-center gap-2.5 mb-4 before:content-[''] before:block before:w-5 before:h-[2px] before:bg-accent">
        AI-Powered
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">
        Describe Your <em className="text-accent not-italic">Problem</em>
      </h2>
      <p className="text-muted max-w-[560px] mb-12 text-[15px]">
        Tell us what's wrong with your device and our AI assistant will identify the repair you need.
      </p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-dark2 border border-line max-w-[780px] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 bg-accent text-white font-display text-[10px] font-black tracking-widest px-3 py-1 uppercase z-10">
          POWERED BY GEMINI 3.5 FLASH
        </div>
        
        <div className="p-6 border-b border-line">
          <h3 className="font-display text-[1.4rem] font-black uppercase text-white">Instant Repair Diagnosis</h3>
          <p className="text-[13px] text-muted mt-1">Free · No commitment required</p>
        </div>
        
        <div className="p-6">
          <p className="text-[12px] tracking-[0.1em] uppercase text-muted mb-2.5 font-display font-bold">Try a common problem:</p>
          <div className="flex gap-2 flex-wrap mb-4">
            {["Cracked screen", "Battery drains fast", "Water damage", "Won't charge", "Camera problem"].map((chip) => (
              <button 
                key={chip}
                onClick={() => setPrompt(`My ${chip.toLowerCase()}`)}
                className="bg-dark3 border border-mid text-muted text-xs px-3 py-1.5 cursor-pointer font-body transition-colors hover:border-accent hover:text-accent"
              >
                {chip}
              </button>
            ))}
          </div>
          
          <div className="flex gap-3 mb-4 flex-col sm:flex-row">
            <input 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1 bg-dark3 border border-mid text-white font-body text-sm px-4 py-3 outline-none transition-colors focus:border-accent placeholder-muted"
              placeholder="e.g. my screen goes black randomly..."
            />
            <button 
              onClick={handleDiagnose}
              disabled={isLoading || !prompt}
              className="bg-accent text-white font-display text-[15px] font-black tracking-widest uppercase px-6 py-3 border-none cursor-pointer whitespace-nowrap transition-all hover:bg-white hover:text-black hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Diagnose →
            </button>
          </div>
          
          {result && (
            <div className="min-h-[80px] bg-dark3 border border-line p-4 text-sm leading-relaxed text-light">
              {isLoading ? (
                <div className="flex gap-1 items-center py-1">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-[bounce_0.9s_infinite]"></div>
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-[bounce_0.9s_infinite_0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-[bounce_0.9s_infinite_0.3s]"></div>
                </div>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: result }} />
              )}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
