import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

export default function checkout() {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:4000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "ChargeNow",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/verified",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);
    rzp1.open();
  };
  return (
    <Box>
      <Stack direction={"row"}>
        <Card
          amount={5000}
          img={
            "https://www.shutterstock.com/image-photo/varna-bulgaria-november-03-2013-260nw-272580014.jpg"
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
}
