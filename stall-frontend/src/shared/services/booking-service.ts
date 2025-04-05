import create from "./http-service";

export interface Booking {
  id: number;
  vendorId: number;
  stallId: number;
  startDate: string;
  endDate: string;
  status: string;
}

export default create("/bookings");
