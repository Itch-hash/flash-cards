import { FLASH_CARDS, FlashCard, CardProps } from "../constants/cards";

function Stats(cards: CardProps): React.JSX.Element {
  const savedCardsExist: string | null = localStorage.getItem("cards");
  const totalCards: FlashCard[] = savedCardsExist
    ? JSON.parse(savedCardsExist)
    : FLASH_CARDS;

  return (
    <section className="rounded-3xl border border-stone-200 bg-card p-6 shadow-float">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
        Session stats
      </p>
      <ul className="mt-4 space-y-3 text-sm text-stone-700">
        <li className="stat-row">
          <span>Total cards</span>
          <strong>{totalCards.length}</strong>
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
  );
}

export default Stats;
