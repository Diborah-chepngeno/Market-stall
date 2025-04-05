import { Booking } from "../shared/services/booking-service";
import useData from "./useData";

const useStall = () =>
  useData<Booking>(`bookings`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach token to request
    },
  });

export default useStall;
