import Revenue from "../components/Home-Components/Revenue";
import { Box, Heading, Text } from '@chakra-ui/react'
import Trusted from "../components/Home-Components/Trusted";
import Hero from "../components/Home-Components/Hero";
export default function Home() {
  return (
    <Box textAlign="center" p="20px">
      <Hero />
      <Heading >Streamline Revenue Operations</Heading>
      <Text m="10px auto" w={{ base: "90%", md: "30%" }} >Chargebee automates the lead-to-ledger workflow across your revenue stack, so you can dream, deploy, and enjoy the breeze.
        While the MRR just keeps rolling.</Text>
      <Revenue />
      <Trusted />
    </Box>
  )
}
