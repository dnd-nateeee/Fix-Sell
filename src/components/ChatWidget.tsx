import React from 'react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputStr, setInputStr] = React.useState('');
  const [messages, setMessages] = React.useState([
    { role: 'bot', text: "Hey! 👋 I'm the Fix & Sell assistant. Ask me about our services, prices, hours, or anything about your device!" }
  ]);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputStr.trim()) return;
    const userText = inputStr.trim();
    setInputStr('');
    
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setMessages(prev => [...prev, { role: 'bot', text: 'Typing...' }]); // Placeholder

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: userText })
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Server error');
      }
      
      setMessages(prev => {
        const _new = [...prev];
        _new[_new.length - 1] = { role: 'bot', text: data.text || "Sorry, no response." };
        return _new;
      });
    } catch (err: any) {
      setMessages(prev => {
        const _new = [...prev];
        _new[_new.length - 1] = { role: 'bot', text: err.message || "Sorry, I'm having trouble connecting to AI. Please call us at (470) 444-1499." };
        return _new;
      });
    }
  };

  return (
    <div className="fixed bottom-[80px] md:bottom-6 right-4 md:right-6 z-[200] flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] sm:w-[340px] bg-dark border border-line flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.6)] max-h-[460px]">
          <div className="bg-dark2 border-b border-line py-3 px-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse"></div>
              <span className="font-display text-[10px] font-black uppercase tracking-[0.2em]">Fix &amp; Sell Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="bg-transparent border-none text-muted text-lg cursor-pointer hover:text-white pb-1">×</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2 text-[13px]">
            {messages.map((msg, i) => (
              <div key={i} className={`max-w-[85%] px-3 py-2 leading-relaxed ${msg.role === 'bot' ? 'bg-dark2 text-light self-start border-l-2 border-accent' : 'bg-accent text-white self-end font-bold'}`}>
                {msg.text === 'Typing...' ? (
                   <div className="flex gap-1 items-center py-1">
                     <div className="w-1.5 h-1.5 bg-accent rounded-full animate-[bounce_0.9s_infinite]"></div>
                     <div className="w-1.5 h-1.5 bg-accent rounded-full animate-[bounce_0.9s_infinite_0.15s]"></div>
                     <div className="w-1.5 h-1.5 bg-accent rounded-full animate-[bounce_0.9s_infinite_0.3s]"></div>
                   </div>
                ) : msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex border-t border-line">
            <input 
              value={inputStr}
              onChange={e => setInputStr(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-dark2 border-none text-white font-body text-[13px] px-3.5 py-2.5 outline-none placeholder-muted"
              placeholder="Ask anything..."
            />
            <button 
              onClick={handleSend}
              className="bg-accent text-white border-none px-4 py-2.5 cursor-pointer font-display text-[13px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-accent text-white font-display text-sm font-black tracking-widest uppercase px-5 py-3 border-none cursor-pointer flex items-center gap-2 shadow-[0_4px_20px_rgba(255,62,0,0.3)] transition-all hover:-translate-y-[2px] hover:opacity-90 hover:shadow-[0_8px_30px_rgba(255,62,0,0.4)]"
      >
        💬 {isOpen ? 'Close UI' : 'Chat with us'}
      </button>
    </div>
  );
}
