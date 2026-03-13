import type { JSX } from "react";
import Stats from "./components/Stats";
import AddCard from "./components/AddCard";
import CurrentCard from "./components/CurrentCard";

function App(): JSX.Element {
  return (
    <main className="min-h-screen bg-shell bg-grain px-4 py-8 text-ink sm:px-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <header className="rounded-3xl border border-amber-200/70 bg-card/90 p-6 shadow-float backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
            Flash Cards
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Study smarter, one card at a time.
          </h1>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <CurrentCard />

          <aside className="space-y-6">
            <AddCard />
            <Stats />
          </aside>
        </section>
      </div>
    </main>
  );
}

export default App;
