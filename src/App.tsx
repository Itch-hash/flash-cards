import { useState, type JSX } from "react";
import Stats from "./components/Stats";
import AddCard from "./components/AddCard";
import CurrentCard from "./components/CurrentCard";
import {
  FLASH_CARDS,
  FlashCard,
  ReviewedCards,
  defaultReviewedCards,
} from "./constants/cards";
import { checkDate } from "./utils/reviewedCards";

function App(): JSX.Element {
  const localStorageCards: string | null = localStorage.getItem("cards");
  const localStorageReviewedCards = localStorage.getItem("reviewedCards");

  if (!localStorageCards) {
    localStorage.setItem("cards", JSON.stringify(FLASH_CARDS));
  }
  if (!localStorageReviewedCards) {
    localStorage.setItem("reviewedCards", JSON.stringify(defaultReviewedCards));
  }

  const foundReviewedCards: ReviewedCards = localStorageReviewedCards
    ? JSON.parse(localStorageReviewedCards)
    : defaultReviewedCards;

  const foundCards = localStorageCards
    ? JSON.parse(localStorageCards)
    : FLASH_CARDS;
  const [cards, setCards] = useState<FlashCard[]>(foundCards);
  const [reviewedCards, setReviewedCards] =
    useState<ReviewedCards>(foundReviewedCards);

  //Resets the date on a new day
  function handleNewDay() {
    const todayDate: number | undefined =
      checkDate(reviewedCards) ?? reviewedCards.date;

    if (todayDate !== reviewedCards.date) {
      const newDay: ReviewedCards = { date: todayDate, reviewedCardIDs: [] };
      setReviewedCards(newDay);
      localStorage.setItem("reviewedCards", JSON.stringify(newDay));
    }
  }

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
          <CurrentCard
            cards={cards}
            setReviewedCards={setReviewedCards}
            reviewedCards={reviewedCards}
            handleNewDay={handleNewDay}
          />

          <aside className="space-y-6">
            <AddCard cards={cards} setCards={setCards} />
            <Stats reviewedCards={reviewedCards} cards={cards} />
          </aside>
        </section>
      </div>
    </main>
  );
}

export default App;
