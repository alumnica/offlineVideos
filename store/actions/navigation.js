import { UPDATE_DATA } from "./types.js";

export function buttonClicked(id) {
  return { type: UPDATE_DATA, id }
}
