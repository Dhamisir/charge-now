import { VStack, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

export default function Card({ amount, img, checkoutHandler }) {
  return (
    <VStack>
      <Image src={img} />
      <Text>{amount}</Text>
      <Button onClick={() => checkoutHandler(amount)}>Buy Now</Button>
    </VStack>
  );
}

<script src="https://checkout.razorpay.com/v1/checkout.js"></script>;
