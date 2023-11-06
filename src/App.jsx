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
    <div className="flex flex-col gap-6 py-20">
      <MainCard />
      <ActivityCard icon={<WorkIcon />} title="Work" bgVariant="work" />
      <ActivityCard icon={<PlayIcon />} title="Play" bgVariant="play" />
      <ActivityCard icon={<StudyIcon />} title="Study" bgVariant="study" />
      <ActivityCard
        icon={<ExerciseIcon />}
        title="Exercise"
        bgVariant="exercise"
        top="1rem"
      />
      <ActivityCard
        icon={<SocialIcon />}
        title="Social"
        bgVariant="social"
        top="3rem"
      />
      <ActivityCard
        icon={<SelfCareIcon />}
        title="Self Care"
        bgVariant="selfcare"
        top="1rem"
      />
    </div>
  );
}

export default App;
