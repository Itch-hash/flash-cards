import { useState } from "react";
import { AddCardProps, FlashCard } from "../constants/cards";

function AddCard({ cards, setCards }: AddCardProps): JSX.Element {
  const [questionInput, setQuestionInput] = useState<string>("");
  const [answerInput, setAnswerInput] = useState<string>("");

  function addCard(question: string, answer: string): void {
    if (question && answer != "") {
      //Sanitize Question Input
      const trimmedQuestion = questionInput.trim();
      const sanitizedQuestion =
        trimmedQuestion.charAt(0).toUpperCase() +
        trimmedQuestion.slice(1).trim();

      //Sanitize Answer Input
      const trimmedAnswer = answerInput.trim();
      const sanitizedAnswer =
        trimmedAnswer.charAt(0).toUpperCase() + trimmedAnswer.slice(1).trim();

      const updatedCards: FlashCard[] = [
        ...cards,
        {
          id: cards.length + 1,
          question: sanitizedQuestion,
          answer: sanitizedAnswer,
          difficulty: "TBD",
        },
      ];

      setCards(updatedCards);

      localStorage.setItem("cards", JSON.stringify(updatedCards));

      setQuestionInput("");
      setAnswerInput("");
    } else
      window.alert("Please insert a question and an answer before saving.");
  }

  return (
    <section className="rounded-3xl border border-stone-200 bg-card p-6 shadow-float">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 select-none">
        Add card
      </p>

      <form className="mt-4 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Question</span>
          <textarea
            className="field mt-2"
            placeholder="Write the front of your card..."
            rows={3}
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">Answer</span>
          <textarea
            className="field mt-2"
            placeholder="Write the back of your card..."
            rows={3}
            value={answerInput}
            onChange={(e) => setAnswerInput(e.target.value)}
          />
        </label>

        <button
          className="btn-primary w-full"
          type="button"
          onClick={() => addCard(questionInput, answerInput)}
        >
          Save Card
        </button>
      </form>
    </section>
  );
}

export default AddCard;
