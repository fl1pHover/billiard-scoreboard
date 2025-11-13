export interface GlobalState {
  players: {
    playerName: string;
    experience: number;
    isVeteran: boolean;
  }[];
}

export default function updateAction(state: GlobalState, payload: Partial<GlobalState>): GlobalState {
  console.log("state:", state);
  console.log("payload:", payload);

  return {
    ...state,
    ...payload,
  };
}
