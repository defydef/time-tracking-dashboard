import ActivityCard from "./ui/ActivityCard";
import MainCard from "./ui/MainCard";

function App() {
  return (
    <div className="flex flex-col gap-3">
      <MainCard />
      <ActivityCard />
    </div>
  );
}

export default App;
