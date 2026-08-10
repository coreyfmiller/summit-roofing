'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: string; content: string; id: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    const userMsg = { role: 'user', content: input, id: crypto.randomUUID() }
    const all = [...messages, userMsg]
    setMessages(all); setInput(''); setIsLoading(true)
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: all }) })
      if (!res.ok || !res.body) { setMessages(p => [...p, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.', id: crypto.randomUUID() }]); return }
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      const botId = crypto.randomUUID()
      setMessages(p => [...p, { role: 'assistant', content: '', id: botId }])
      let done = false
      while (!done) { const { value, done: d } = await reader.read(); done = d; const t = decoder.decode(value, { stream: true }); setMessages(p => p.map(m => m.id === botId ? { ...m, content: m.content + t } : m)) }
    } catch { setMessages(p => [...p, { role: 'assistant', content: 'Something went wrong. Please try again.', id: crypto.randomUUID() }]) }
    finally { setIsLoading(false) }
  }

  if (!open) return (
    <button onClick={() => setOpen(true)} className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-lg transition hover:scale-105" aria-label="Open chat">
      <MessageCircle className="h-5 w-5" /> Chat with us
    </button>
  )

  return (
    <div className="fixed bottom-6 right-6 z-50 flex h-[500px] w-[360px] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:w-[390px]">
      <div className="flex items-center justify-between border-b border-border bg-primary px-4 py-3">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-primary-foreground" />
          <span className="text-sm font-semibold text-primary-foreground">Chat Assistant</span>
          <span className="ml-1 h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        </div>
        <button onClick={() => setOpen(false)} className="text-primary-foreground/70 hover:text-primary-foreground" aria-label="Close"><X className="h-5 w-5" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && <div className="mt-8 text-center text-sm text-muted-foreground"><MessageCircle className="mx-auto mb-3 h-10 w-10 text-primary/30" /><p className="font-medium text-foreground">How can we help?</p><p className="mt-1">Ask us anything about our services.</p></div>}
        {messages.map(m => (<div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === 'user' ? 'rounded-br-sm bg-primary text-primary-foreground' : 'rounded-bl-sm border border-border bg-card text-foreground'}`}>{m.role === 'user' ? m.content : <span dangerouslySetInnerHTML={{ __html: m.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />}</div></div>))}
        {isLoading && <div className="flex justify-start"><div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin text-primary" />Thinking...</div></div>}
        <div ref={endRef} />
      </div>
      <div className="border-t border-border p-3">
        <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1 focus-within:border-primary/50">
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask a question..." className="flex-1 bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground" disabled={isLoading} />
          <button type="submit" disabled={isLoading || !input.trim()} className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground disabled:opacity-40" aria-label="Send"><Send className="h-4 w-4" /></button>
        </form>
      </div>
    </div>
  )
}
