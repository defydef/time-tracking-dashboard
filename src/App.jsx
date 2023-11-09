import ActivityCard from "./ui/ActivityCard";
import MainCard from "./ui/MainCard";
import WorkIcon from "./ui/svg/WorkIcon";
import PlayIcon from "./ui/svg/PlayIcon";
import StudyIcon from "./ui/svg/StudyIcon";
import ExerciseIcon from "./ui/svg/ExerciseIcon";
import SocialIcon from "./ui/svg/SocialIcon";
import SelfCareIcon from "./ui/svg/SelfCareIcon";
import data from "./data/data.json";

function App() {
  const additionalProps = [
    { icon: <WorkIcon />, bgVariant: "bg-[var(--work)]" },
    { icon: <PlayIcon />, bgVariant: "bg-[var(--play)]" },
    { icon: <StudyIcon />, bgVariant: "bg-[var(--study)]" },
    {
      icon: <ExerciseIcon />,
      bgVariant: "bg-[var(--exercise)]",
      bottom: "bottom-[-1rem]",
      topSm: "-top-5",
    },
    {
      icon: <SocialIcon />,
      bgVariant: "bg-[var(--social)]",
      bottom: "bottom-[-3rem]",
      topSm: "top-2",
    },
    {
      icon: <SelfCareIcon />,
      bgVariant: "bg-[var(--selfcare)]",
      bottom: "bottom-[-1rem]",
      topSm: "-top-5",
    },
  ];
  const activities = data.map((d, i) => {
    const { bgVariant, icon, bottom, bottomSm, topSm } = additionalProps[i];
    return { ...d, bgVariant, icon, bottom, bottomSm, topSm };
  });
  return (
    <div className="flex flex-col gap-y-6 py-20 sm:grid sm:grid-rows-2 sm:grid-cols-4 sm:gap-7 overflow-hidden">
      <MainCard />
      {activities.map((activity) => (
        <ActivityCard
          key={activity.title}
          title={activity.title}
          icon={activity.icon}
          bgVariant={activity.bgVariant}
          bottom={activity.bottom}
          bottomSm={activity.bottomSm}
          topSm={activity.topSm}
        />
      ))}
    </div>
  );
}

export default App;
