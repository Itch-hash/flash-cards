function EmptyCards(): React.JSX.Element {
  return (
    <article className="flex flex-col rounded-3xl border border-stone-200 bg-card p-6 shadow-float">
      <div className="mt-5 rounded-2xl border border-stone-200 bg-white p-6 flex-1">
        <p className="mt-3 text-2xl font-semibold leading-snug">
          No Cards Found, Please Add A Card To View It
        </p>
      </div>
    </article>
  );
}

export default EmptyCards;
