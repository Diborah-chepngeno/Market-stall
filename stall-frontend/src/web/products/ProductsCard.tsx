import { Button, Card, Heading, Image, HStack } from "@chakra-ui/react";
import { Product } from "../../hooks/useProduct";
import bookingService, { Booking } from "../../shared/services/booking-service";
import useStall from "../../hooks/useStall";
import { useState } from "react";

interface Prop {
  product: Product;
}

const ProductsCard = ({ product }: Prop) => {
  const [booking, setBooking] = useState({
    id: 0,
    vendorId: 0,
    stallId: 0,
    startDate: "",
    endDate: "",
    status: "",
  });

  const { data } = useStall();

  const book = (Id: number) => {
    const productStall = data.find((stall) => stall.id === Id);
    const currentDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);

    setBooking({
      ...booking,
      vendorId: parseInt(localStorage.getItem("userId") || "0", 10),
      stallId: Id,
      startDate: currentDate.toISOString(),
      endDate: endDate.toISOString(),
      status: productStall?.isOccupied ? "active" : "Inactive",
    });

    if (localStorage.getItem("userId"))
      return bookingService
        .create<Booking>(booking)
        .then((res) => {
          alert(`you have booked the stall${res.status}`);
        })
        .catch((error) => {
          alert(`error bokoking ${error}`);
        });
    return alert("kindly login first");
  };

  return (
    <Card>
      <Image height="300px" src={product.image} />
      <Heading size="lg">{product.name}</Heading>
      <Heading size="sm">
        Location: {data.find((stall) => stall.id === product.stallId)?.location}
      </Heading>
      <HStack justifyContent="space-between">
        <Heading size="sm">Quantity: {product.quantity}</Heading>
        <Heading size="sm">Stall Id: {product.stallId}</Heading>
        <Heading size="sm">
          Occupied:{" "}
          {data.find((stall) => stall.id === product.stallId)?.isOccupied
            ? "true"
            : "false"}
        </Heading>
      </HStack>
      <Button onClick={() => book(product.stallId)}>book the stall</Button>
    </Card>
  );
};

export default ProductsCard;
