function MainCard() {
  const textHover = "hover:text-white hover:cursor-pointer";
  return (
    <div className="bg-[var(--card-bg)] w-[20.4375rem] sm:w-[15.9375rem] rounded-[0.9375rem] pb-3 flex flex-col gap-3 sm:row-span-full">
      <section className="bg-[var(--primary)] rounded-[0.9375rem] px-5 py-6 sm:p-7 sm:h-[22.125rem]">
        <div className="flex sm:flex-col items-center sm:items-start justify-start gap-5">
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
            <h1 className="text-[1.5rem] sm:text-[2.5rem] font-light leading-tight">
              Jeremy Robson
            </h1>
          </div>
        </div>
      </section>
      <section className="flex sm:flex-col justify-around items-end sm:items-start sm:gap-3 sm:py-3 sm:px-7 text-[var(--secondary-heading)] ">
        <p className={textHover}>Daily</p>
        <p className={textHover}>Weekly</p>
        <p className={textHover}>Monthly</p>
      </section>
    </div>
  );
}

export default MainCard;
