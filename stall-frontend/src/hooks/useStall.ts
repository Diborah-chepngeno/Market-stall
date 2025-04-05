import useData from "./useData";

export interface Stall {
  id: number;
  number: String;
  location: String;
  size: String;
  isOccupied: Boolean;
}

const useStall = () =>
  useData<Stall>(`stalls`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach token to request
    },
  });

export default useStall;
