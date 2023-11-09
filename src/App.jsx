import ActivityCard from "./ui/ActivityCard";
import MainCard from "./ui/MainCard";
import WorkIcon from "./ui/svg/WorkIcon";
import PlayIcon from "./ui/svg/PlayIcon";
import StudyIcon from "./ui/svg/StudyIcon";
import ExerciseIcon from "./ui/svg/ExerciseIcon";
import SocialIcon from "./ui/svg/SocialIcon";
import SelfCareIcon from "./ui/svg/SelfCareIcon";
import data from "./data/data.json";
import { useState } from "react";

function App() {
  const additionalProps = [
    {
      icon: <WorkIcon />,
      bgVariant: "bg-[var(--work)]",
      // bottom: "-bottom-9",
    },
    {
      icon: <PlayIcon />,
      bgVariant: "bg-[var(--play)]",
      // bottom: "-bottom-9",
      topSm: "sm:-top-1",
    },
    {
      icon: <StudyIcon />,
      bgVariant: "bg-[var(--study)]",
      // bottom: "-bottom-9",
    },
    {
      icon: <ExerciseIcon />,
      bgVariant: "bg-[var(--exercise)]",
      // bottom: "-bottom-4",
      topSm: "sm:-top-5",
    },
    {
      icon: <SocialIcon />,
      bgVariant: "bg-[var(--social)]",
      // bottom: "-bottom-10",
      topSm: "sm:top-2",
    },
    {
      icon: <SelfCareIcon />,
      bgVariant: "bg-[var(--selfcare)]",
      // bottom: "-bottom-4",
      topSm: "sm:-top-5",
    },
  ];
  const activities = data.map((d, i) => {
    const { bgVariant, icon, bottom, bottomSm, topSm } = additionalProps[i];
    return { ...d, bgVariant, icon, bottom, bottomSm, topSm };
  });
  const [period, setPeriod] = useState("Weekly");
  return (
    <div className="flex flex-col gap-y-6 py-20 sm:grid sm:grid-rows-2 sm:grid-cols-4 sm:gap-7 overflow-hidden">
      <MainCard period={period} setPeriod={setPeriod} />
      {activities.map((activity) => (
        <ActivityCard
          key={activity.title}
          title={activity.title}
          icon={activity.icon}
          bgVariant={activity.bgVariant}
          bottom={activity.bottom}
          bottomSm={activity.bottomSm}
          topSm={activity.topSm}
          current={activity.timeframes[period.toLowerCase()].current}
          previous={activity.timeframes[period.toLowerCase()].previous}
        />
      ))}
    </div>
  );
}

export default App;
