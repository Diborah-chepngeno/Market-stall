import { Table } from "@chakra-ui/react";
import useBooking from "../hooks/useBooking";

const CartTable = () => {
  const { data } = useBooking();
  const userId = parseInt(localStorage.getItem("userId") || "0", 10);
  const userBookings = data.filter((book) => book.vendorId === userId);
  const Role = localStorage.getItem("role");
  const getbookings = () => {
    if (Role === "Admin") return data;
    return userBookings;
  };
  return (
    <>
      {localStorage.getItem("role") === "Admin"}
      {userBookings.length === 0 && <h3>There is no booked Stall</h3>}
      <Table variant="simple">
        <thead>
          <tr>
            <th>vendorId</th>
            <th>StallId</th>
            <th>startDate</th>
            <th>endDate</th>
            <th>status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {getbookings().map((booking) => (
            <tr key={booking.id}>
              <td>{booking.vendorId}</td>
              <td>{booking.stallId}</td>
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default CartTable;
