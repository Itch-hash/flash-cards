import { useState } from "react";
import { FLASH_CARDS, FlashCard } from "../constants/cards";

function CurrentCard(): JSX.Element {
  const flashCard: FlashCard[] = FLASH_CARDS;
  const [showBack, setshowBack] = useState(true);
  const [index, setIndex] = useState(0);

  function handleNext() {
    if (flashCard[index + 1].id == undefined) {
      return;
    } else {
      setIndex((i) => i + 1);
    }
  }

  function handlePrevious() {
    if (flashCard[index - 1].id == undefined) {
      return;
    } else {
      setIndex((i) => i - 1);
    }
  }

  const Front = () => {
    return (
      <>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber-700">
          Front
        </p>
        <p className="mt-3 text-2xl font-semibold leading-snug">
          {flashCard[index].question}
        </p>
      </>
    );
  };

  const Back = () => {
    return (
      <>
        {" "}
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber-700">
          Back
        </p>
        <p className="mt-3 text-lg leading-relaxed text-stone-700">
          {flashCard[index].answer}
        </p>
      </>
    );
  };

  return (
    <article className="rounded-3xl border border-stone-200 bg-card p-6 shadow-float">
      <div className="flex flex-row gap-4 flex-wrap">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          Current card
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          Difficulty is {flashCard[index].difficulty}
        </p>
      </div>

      <div className="mt-5 rounded-2xl border border-stone-200 bg-white p-6">
        <Front />
        {!showBack && (
          <>
            <div className="my-6 h-px bg-stone-200" />
            <Back />
          </>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 select-none">
        <button
          className="btn-primary"
          type="button"
          onClick={() => setshowBack(!showBack)}
        >
          {showBack ? "Show" : "Hide"} Back
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
      </div>
    </article>
  );
}

export default CurrentCard;
