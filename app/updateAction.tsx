import { Player } from "./store";

export default function updateAction(
  state: { players: Player[] },
  payload: Partial<{ players: Player[] }>
) {
  return {
    ...state,
    ...payload,
  };
}
