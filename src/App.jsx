import ActivityCard from "./ui/ActivityCard";
import MainCard from "./ui/MainCard";
import WorkIcon from "./ui/svg/WorkIcon";
import PlayIcon from "./ui/svg/PlayIcon";
import StudyIcon from "./ui/svg/StudyIcon";
import ExerciseIcon from "./ui/svg/ExerciseIcon";
import SocialIcon from "./ui/svg/SocialIcon";
import SelfCareIcon from "./ui/svg/SelfCareIcon";

function App() {
  return (
    <div className="flex flex-col gap-y-6 py-20 sm:grid sm:grid-rows-2 sm:grid-cols-4 sm:gap-7 overflow-hidden">
      <MainCard />
      <ActivityCard
        icon={<WorkIcon />}
        title="Work"
        bgVariant="bg-[var(--work)]"
      />
      <ActivityCard
        icon={<PlayIcon />}
        title="Play"
        bgVariant="bg-[var(--play)]"
      />
      <ActivityCard
        icon={<StudyIcon />}
        title="Study"
        bgVariant="bg-[var(--study)]"
      />
      <ActivityCard
        icon={<ExerciseIcon />}
        title="Exercise"
        bgVariant="bg-[var(--exercise)]"
        bottom="bottom-[-1rem]"
        bottomSm="bottom-[1rem]"
      />
      <ActivityCard
        icon={<SocialIcon />}
        title="Social"
        bgVariant="bg-[var(--social)]"
        bottom="bottom-[-3rem]"
        topSm="top-2"
      />
      <ActivityCard
        icon={<SelfCareIcon />}
        title="Self Care"
        bgVariant="bg-[var(--selfcare)]"
        bottom="bottom-[-1rem]"
        bottomSm="bottom-[1rem]"
      />
    </div>
  );
}

export default App;
