import { useState } from "react";
import { CurrentCardProps } from "../constants/cards";

function CurrentCard({ cards }: CurrentCardProps): React.JSX.Element {
  const [showBack, setshowBack] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  function handleNext(): void {
    if (index >= cards.length - 1) {
      return;
    } else {
      setIndex((i) => i + 1);
    }
  }
  function handlePrevious(): void {
    if (index <= 0) {
      return;
    } else {
      setIndex((i) => i - 1);
    }
  }

  const Front = (): React.JSX.Element => {
    return (
      <>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber-700">
          Front
        </p>
        <p className="mt-3 text-2xl font-semibold leading-snug">
          {cards[index].question}
        </p>
      </>
    );
  };

  const Back = (): React.JSX.Element => {
    return (
      <>
        {" "}
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber-700">
          Back
        </p>
        <p className="mt-3 text-lg leading-relaxed text-stone-700">
          {cards[index].answer}
        </p>
      </>
    );
  };

  function handleDeleteCard() {}

  return (
    <article className="flex flex-col rounded-3xl border border-stone-200 bg-card p-6 shadow-float">
      <div className="flex flex-row gap-4 flex-wrap">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          Current card
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          Difficulty is {cards[index].difficulty}
        </p>
      </div>

      <div className="mt-5 rounded-2xl border border-stone-200 bg-white p-6 flex-1">
        <Front />
        {showBack && (
          <>
            <div className="my-6 h-px bg-stone-200" />
            <Back />
          </>
        )}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-6 select-none">
        <button
          className="btn-primary"
          type="button"
          onClick={() => setshowBack(!showBack)}
        >
          {showBack ? "Hide" : "Show"} Back
        </button>
        <button
          className="btn-secondary select-none"
          type="button"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="btn-secondary select-none"
          type="button"
          onClick={handleNext}
        >
          Next
        </button>
        <button
          className="btn-secondary select-none"
          type="button"
          onClick={handleDeleteCard}
        >
          Delete Current Card
        </button>
      </div>
    </article>
  );
}

export default CurrentCard;
