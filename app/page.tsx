
import TestForm from "@/components/common/testForm";
import Leaderboard from "./components/leaderboard";
import { PlayerProvider } from "@/providers/player-provider";


export default function Home() {
  return (
      <div className="">
       {/* <TestForm /> */}
        <Leaderboard />
      </div>
  );
}
