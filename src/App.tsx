import type { JSX } from "react";

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
          <p className="mt-3 max-w-2xl text-sm text-stone-700 sm:text-base">
            UI scaffold only: connect your React state and handlers to create,
            edit, and review cards.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <article className="rounded-3xl border border-stone-200 bg-card p-6 shadow-float">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Current card
            </p>

            <div className="mt-5 rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber-700">
                Front
              </p>
              <p className="mt-3 text-2xl font-semibold leading-snug">
                What is the time complexity of binary search?
              </p>

              <div className="my-6 h-px bg-stone-200" />

              <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber-700">
                Back
              </p>
              <p className="mt-3 text-lg leading-relaxed text-stone-700">
                O(log n) because the search space is halved on every step.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="btn-primary" type="button">
                Flip Card
              </button>
              <button className="btn-secondary" type="button">
                Previous
              </button>
              <button className="btn-secondary" type="button">
                Next
              </button>
            </div>
          </article>

          <aside className="space-y-6">
            <section className="rounded-3xl border border-stone-200 bg-card p-6 shadow-float">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Add card
              </p>

              <form className="mt-4 space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-stone-700">Question</span>
                  <textarea
                    className="field mt-2"
                    placeholder="Write the front of your card..."
                    rows={3}
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-stone-700">Answer</span>
                  <textarea
                    className="field mt-2"
                    placeholder="Write the back of your card..."
                    rows={3}
                  />
                </label>

                <button className="btn-primary w-full" type="button">
                  Save Card
                </button>
              </form>
            </section>

            <section className="rounded-3xl border border-stone-200 bg-card p-6 shadow-float">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Session stats
              </p>
              <ul className="mt-4 space-y-3 text-sm text-stone-700">
                <li className="stat-row">
                  <span>Total cards</span>
                  <strong>24</strong>
                </li>
                <li className="stat-row">
                  <span>Reviewed today</span>
                  <strong>12</strong>
                </li>
                <li className="stat-row">
                  <span>Accuracy</span>
                  <strong>83%</strong>
                </li>
              </ul>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default App;
