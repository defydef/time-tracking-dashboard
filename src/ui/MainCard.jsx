function MainCard() {
  return (
    <div className="bg-[var(--card-bg)] w-[20.4375rem] sm:w-[15.9375rem] sm:h-max rounded-[0.9375rem] pb-3 flex flex-col gap-3 sm:row-span-full">
      <section className="bg-[var(--primary)] rounded-[0.9375rem] px-5 py-6">
        <div className="flex items-center justify-start gap-5">
          <div className="rounded-full w-[4.5rem] h-[4.5rem] bg-white flex justify-center items-center">
            <img
              className="rounded-full w-16 h-16"
              src="/images/image-jeremy.png"
            />
          </div>
          <div>
            <p className="text-[0.9375rem] text-[var(--secondary-text)]">
              Report for
            </p>
            <h1 className="text-[1.5rem] font-light">Jeremy Robson</h1>
          </div>
        </div>
      </section>
      <section className="flex justify-around items-end text-[var(--secondary-heading)]">
        <p>Daily</p>
        <p className="text-white">Weekly</p>
        <p>Monthly</p>
      </section>
    </div>
  );
}

export default MainCard;
