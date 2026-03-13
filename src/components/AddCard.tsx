function AddCard(): JSX.Element {
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
  );
}

export default AddCard;
