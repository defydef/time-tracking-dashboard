import TimePeriod from "./TimePeriod";

function MainCard({ period, setPeriod }) {
  return (
    <div className="bg-[var(--card-bg)] w-[20.4375rem] sm:w-[15.9375rem] rounded-[0.9375rem] pb-3 flex flex-col gap-3 sm:row-span-full">
      <section className="bg-[var(--primary)] rounded-[0.9375rem] px-5 py-6 sm:p-7 sm:h-[22.125rem]">
        <div className="flex sm:flex-col items-center sm:items-start justify-start gap-5">
          <div className="rounded-full w-[4.5rem] sm:w-[5.3rem] h-[4.5rem] sm:h-[5.3rem] bg-white flex justify-center items-center">
            <img
              className="rounded-full w-16 h-16 sm:w-[4.875rem] sm:h-[4.875rem]"
              src="/images/image-jeremy.png"
              alt="Profile picture"
            />
          </div>
          <div>
            <p className="text-[0.9375rem] text-[var(--secondary-text)]">
              Report for
            </p>
            <h1 className="text-[1.5rem] sm:text-[2.5rem] font-light leading-tight">
              Jeremy Robson
            </h1>
          </div>
        </div>
      </section>
      <section className="flex sm:flex-col justify-around items-end sm:items-start sm:gap-3 sm:py-3 sm:px-7 text-[var(--secondary-heading)] ">
        <TimePeriod
          onSelect={setPeriod}
          label="Daily"
          selectedPeriod={period}
        />
        <TimePeriod
          label="Weekly"
          onSelect={setPeriod}
          selectedPeriod={period}
        />
        <TimePeriod
          label="Monthly"
          onSelect={setPeriod}
          selectedPeriod={period}
        />
      </section>
    </div>
  );
}

export default MainCard;
