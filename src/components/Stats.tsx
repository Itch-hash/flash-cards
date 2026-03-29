import { StatsProps } from "../constants/cards";

function Stats({ reviewedCards, cards }: StatsProps): React.JSX.Element {
  return (
    <section className="rounded-3xl border border-stone-200 bg-card p-6 shadow-float">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
        Session stats
      </p>
      <ul className="mt-4 space-y-3 text-sm text-stone-700">
        <li className="stat-row">
          <span>Total cards</span>
          <strong>{cards.length}</strong>
        </li>
        <li className="stat-row">
          <span>Reviewed today</span>
          <strong>{reviewedCards.reviewedCardIDs.length}</strong>
        </li>
      </ul>
    </section>
  );
}

export default Stats;
