import { Box, Text, Heading, VStack } from "@chakra-ui/react";
import React from "react";

export default function paymentSuccess() {
  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>Order Successful</Heading>
        <Text>Reference No. 3423456223</Text>
      </VStack>
    </Box>
  );
}
