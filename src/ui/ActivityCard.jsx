function ActivityCard({ icon, title, bgVariant, bottom = "bottom-[-2.2rem]" }) {
  return (
    <div
      className={`${bgVariant} w-[20.4375rem] h-[10rem] rounded-[0.9375rem] flex flex-col overflow-hidden justify-end`}
    >
      <div className={`flex justify-end relative z-[1] mr-2 ${bottom}`}>
        {icon}
      </div>
      <section className="bg-[var(--card-bg)] h-[7.625rem] rounded-[0.9375rem_0.9375rem_0_0] px-5 py-6 z-[2] relative">
        <div className="flex flex-col">
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
          <section className="flex justify-between items-center">
            <h1 className="text-[2rem] font-light">32hrs</h1>
            <p className="text-[var(--secondary-text)] text-[0.9375rem]">
              Last Week - 36hrs
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default ActivityCard;
