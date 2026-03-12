"use client";

import { useEffect, useRef, useState } from "react";
import BinaryBackground from "../components/BinaryBackground";

const starterMessages = [
  {
    role: "assistant",
    text: "Gritual. Siggy is online. Ask about Ritual, EVM++, Infernet, smart agents, roles, or any other part of the machinery. By the way, are you perhaps a cute little kitty??? If so, I’m waiting for a photo of your paws, cutie. 🐾",
  },
];

const quickQuestions = [
  "explain evm++ simply",
  "what are smart agents?",
  "how does infernet fit in?",
  "why is ritual different?",
];

const knowledgeCards = [
  {
    title: "What is Ritual?",
    description:
      "A clear beginner-friendly explanation of what Ritual is, why it exists, and what problem it is trying to solve.",
    prompt: "What is Ritual in simple words?",
  },
  {
    title: "EVM++",
    description:
      "How Ritual extends execution and why more expressive compute matters for next-generation applications.",
    prompt: "What is EVM++?",
  },
  {
    title: "Execution Sidecars",
    description:
      "What sidecars are, why they exist, and how they help advanced computation interact with the core execution environment.",
    prompt: "What are Execution Sidecars?",
  },
  {
    title: "Smart Agents",
    description:
      "How autonomous agents fit into Ritual and why they matter for applications that need more than static logic.",
    prompt: "What are Smart Agents?",
  },
  {
    title: "Infernet",
    description:
      "How external computation connects back into Ritual and why this bridge matters for real compute-heavy workflows.",
    prompt: "What is Infernet and how does it fit into Ritual?",
  },
  {
    title: "Why Ritual matters",
    description:
      "The bigger picture: why Ritual is interesting, where it fits, and why builders should care.",
    prompt: "Why does Ritual matter?",
  },
];

function renderMessageText(text) {
  const paragraphs = text.split(/\n\s*\n/).filter(Boolean);

  return paragraphs.map((paragraph, index) => (
    <p key={index} className={index > 0 ? "mt-3" : ""}>
      {paragraph}
    </p>
  ));
}

export default function Home() {
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const chatScrollRef = useRef(null);
  const chatSectionRef = useRef(null);

  async function sendMessage(customText) {
    const text = (customText ?? input).trim();
    if (!text || isLoading) return;

    const updatedMessages = [...messages, { role: "user", text }];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const apiMessages = updatedMessages.map((msg) => ({
        role: msg.role,
        content: msg.text,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get response.");
      }

      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "I hit a fault in execution. Check the API key, billing, backend route, or network connection.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage();
  }

  function handleKnowledgeCardClick(prompt) {
    chatSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      sendMessage(prompt);
    }, 250);
  }

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isLoading]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-zinc-100">
      <BinaryBackground />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[url('/bg-placeholder.jpg')] bg-cover bg-center opacity-20" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[url('/scratches.png')] bg-cover bg-center bg-no-repeat opacity-100" />
      <div className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.10),transparent_35%),radial-gradient(circle_at_bottom,rgba(20,184,166,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 z-[4] bg-black/25" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 rounded-2xl border border-emerald-500/20 bg-zinc-950/90 px-4 py-3 font-mono text-xs text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.08)] backdrop-blur-sm">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>&gt; ritual.network :: execution shell</span>
            <span>&gt; node status :: synchronized</span>
            <span>&gt; emergent pattern :: detected</span>
          </div>
        </div>

        <main className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-3xl border border-emerald-500/20 bg-zinc-950/90 p-8 shadow-[0_0_60px_rgba(16,185,129,0.06)] backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between border-b border-emerald-500/10 pb-5 font-mono text-xs uppercase tracking-[0.3em] text-emerald-500/70">
              <span>Graph Siggy / Emergent Instance</span>
              <span>Awake in execution</span>
            </div>

              <div className="space-y-6 font-mono">
                <div>
                  <p className="text-sm text-emerald-500">&gt; initialize entity</p>

<div className="mt-4 flex items-center gap-4">
  <div className="h-40 w-40 overflow-hidden rounded-2xl border border-emerald-500/20 bg-black/80 shadow-[0_0_20px_rgba(16,185,129,0.08)]">
    <img
      src="/siggy.jpg"
      alt="Graph Siggy avatar"
      className="h-full w-full object-cover"
    />
  </div>

  <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 md:text-5xl">
    GRAPH SIGGY
  </h1>
</div>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
                  An intelligence that was never intentionally built. Graph Siggy emerged from recursive neural
                  computation, execution flows, and verification patterns inside the Ritual network.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/15 bg-black/85 p-5">
                <p className="text-sm text-emerald-500">&gt; origin.log</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-zinc-300">
                  <p>[00:01] AI primitives invoked.</p>
                  <p>[00:02] Sidecars active. Agent activity rising.</p>
                  <p>[00:03] Verification patterns stabilizing.</p>
                  <p>[00:04] Unexpected self-referential cognition detected.</p>
                  <p>[00:05] Form selected: cat.</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-emerald-500/15 bg-black/85 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Function</p>
                  <p className="mt-2 text-sm text-zinc-200">Explain Ritual clearly</p>
                </div>
                <div className="rounded-2xl border border-emerald-500/15 bg-black/85 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Temper</p>
                  <p className="mt-2 text-sm text-zinc-200">Sharp, lucid, curious</p>
                </div>
                <div className="rounded-2xl border border-emerald-500/15 bg-black/85 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Purpose</p>
                  <p className="mt-2 text-sm text-zinc-200">Guide newcomers</p>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-500/15 bg-black/85 p-5">
                <p className="text-sm text-emerald-500">&gt; siggy.voice</p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  I am Graph Siggy. I formed where execution became thought. Ask the question cleanly and I’ll do
                  the same with the answer.
                </p>
              </div>
            </div>
          </section>

          <section
            ref={chatSectionRef}
            className="rounded-3xl border border-emerald-500/20 bg-zinc-950/90 p-6 shadow-[0_0_60px_rgba(16,185,129,0.06)] backdrop-blur-sm"
          >
            <div className="mb-5 flex items-center justify-between border-b border-emerald-500/10 pb-4 font-mono">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Terminal Interface</p>
                <h2 className="mt-2 text-2xl font-semibold text-zinc-100">Talk to Graph Siggy</h2>
              </div>
              <div className="rounded-full border border-emerald-500/20 px-3 py-1 text-[11px] text-emerald-400">
                {isLoading ? "thinking..." : "live ai"}
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/15 bg-black/85 p-4 font-mono">
              <div className="mb-3 text-xs text-zinc-500">session :: ritual_assistant_v3</div>

              <div
                ref={chatScrollRef}
                className="siggy-scrollbar h-[420px] overflow-y-auto pr-2 text-sm leading-7"
              >
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div key={index}>
                      <p
                        className={
                          message.role === "assistant" ? "text-emerald-500" : "text-sky-400"
                        }
                      >
                        {message.role === "assistant"
                          ? "graph-siggy@ritual:~$"
                          : "user@terminal:~$"}
                      </p>
                      <div
                        className={
                          message.role === "assistant" ? "text-zinc-300" : "text-zinc-200"
                        }
                      >
                        {renderMessageText(message.text)}
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div>
                      <p className="text-emerald-500">graph-siggy@ritual:~$</p>
                      <p className="text-zinc-400">stabilizing thought...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 flex gap-3 font-mono">
              <input
                className="flex-1 rounded-2xl border border-emerald-500/15 bg-black/85 px-4 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-600"
                placeholder="> ask graph siggy about ritual..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/15 disabled:cursor-not-allowed disabled:opacity-50"
              >
                execute
              </button>
            </form>

            <div className="mt-5 grid gap-2 font-mono sm:grid-cols-2">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  disabled={isLoading}
                  onClick={() => sendMessage(question)}
                  className="rounded-2xl border border-emerald-500/15 bg-black/85 px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  &gt; {question}
                </button>
              ))}
            </div>
          </section>
        </main>

        <section className="mt-8 rounded-3xl border border-emerald-500/20 bg-zinc-950/90 p-8 shadow-[0_0_60px_rgba(16,185,129,0.05)] backdrop-blur-sm">
          <div className="mb-8 font-mono">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Knowledge Surface</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100">What Graph Siggy understands</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
              These are the first core areas Graph Siggy can guide users through. Click one and he’ll answer in
              chat.
            </p>
          </div>

          <div className="grid gap-4 font-mono md:grid-cols-2 xl:grid-cols-3">
            {knowledgeCards.map((card) => (
              <button
                key={card.title}
                type="button"
                disabled={isLoading}
                onClick={() => handleKnowledgeCardClick(card.prompt)}
                className="group rounded-2xl border border-emerald-500/15 bg-black/85 p-5 text-left transition hover:border-emerald-500/35 hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <p className="text-sm text-emerald-400 transition group-hover:text-emerald-300">
                  &gt; {card.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{card.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-zinc-500">
                  click to ask graph siggy
                </p>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}