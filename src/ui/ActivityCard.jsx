function ActivityCard() {
  return (
    <div className="bg-[var(--work)] w-[20.4375rem] rounded-[0.9375rem] flex flex-col justify-end overflow-hidden">
      <div className="flex justify-end">
        <svg
          width="79"
          height="79"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-[-1rem]"
        >
          <path
            d="m18.687 10.43 15.464 30.906c.31.682.743 1.322 1.3 1.88.558.557 1.198.99 1.714 1.217L68.237 59.98 52.484 75.732a8.025 8.025 0 0 1-11.355 0L2.934 37.538a8.025 8.025 0 0 1 0-11.356L18.687 10.43Zm19.345-7.99 10.839 10.838 2.065-2.064a5.845 5.845 0 0 1 8.258 0l8.258 8.259a5.845 5.845 0 0 1 0 8.258l-2.064 2.064 10.839 10.84a8.025 8.025 0 0 1 0 11.355l-4.728 4.728L39.126 40.53a1.963 1.963 0 0 1-.578-.413 1.963 1.963 0 0 1-.413-.578L21.95 7.168l4.728-4.728a8.025 8.025 0 0 1 11.355 0Zm17.033 12.903-2.064 2.065 8.258 8.258 2.064-2.064-8.258-8.259Z"
            fill="#D96C47"
            fillRule="nonzero"
          />
        </svg>
      </div>
      <section className="bg-[var(--card-bg)] rounded-[0.9375rem] px-5 py-6 relative mt-[-1.3rem] p-3">
        <div className="flex flex-col">
          <section>
            <p>Work</p>
          </section>
          <section>
            <h1>32hrs</h1>
          </section>
        </div>
      </section>
    </div>
  );
}

export default ActivityCard;
