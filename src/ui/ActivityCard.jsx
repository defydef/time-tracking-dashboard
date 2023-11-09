function ActivityCard({
  icon,
  title,
  bgVariant,
  bottom = "bottom-0",
  bottomSm = "sm:bottom-0",
  topSm = "sm:top-0",
  current,
  previous,
}) {
  return (
    <div
      className={`${bgVariant} w-[20.4375rem] sm:w-[15.9375rem] h-[10rem] sm:h-[15.2475rem] rounded-[0.9375rem] flex flex-col overflow-hidden justify-end`}
    >
      <div
        className={`flex justify-end relative z-[1] mr-2 ${bottom} ${bottomSm} ${topSm}`}
      >
        {icon}
      </div>
      <section className="bg-[var(--card-bg)] hover:bg-[#33397A] h-[7.625rem] sm:h-[12.4375rem] rounded-[0.9375rem_0.9375rem_0_0] px-5 py-6 sm:py-5 sm:pb-6 z-[2] relative sm:mt-[-1.5rem] hover:cursor-pointer">
        <div className="flex flex-col justify-between sm:gap-3 sm:px-2.5 sm:pt-2">
          <section className="flex justify-between items-center">
            <p className="text-[1.125rem] font-medium">{title}</p>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF"
                fillRule="evenodd"
              />
            </svg>
          </section>
          <section className="flex justify-between items-center sm:items-start sm:flex-col">
            <h1 className="text-[2rem] sm:text-[3.5rem] font-light">
              {current}hrs
            </h1>
            <p className="text-[var(--secondary-text)] text-[0.9375rem] sm:mt-[-0.2rem]">
              Last Week - {previous}hrs
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default ActivityCard;
