export const SEARCH = "SEARCH";

export function search(value){
  console.log("The Payload " + value);
  return {type: SEARCH, payload: value};
}
