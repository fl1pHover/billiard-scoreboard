import TestForm from "@/components/common/testForm";
import Leaderboard from "./components/leaderboard";
import { PlayerProvider } from "@/providers/player-provider";

export default function Home() {
  return (
  <PlayerProvider>
      <div className="p-6 max-w-md mx-auto">
        <TestForm />
        <Leaderboard />
      </div>
    </PlayerProvider>
  );
}
