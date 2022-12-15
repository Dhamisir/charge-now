import Revenue from "../components/Home-Components/Revenue";
import { Box, Heading, Text } from '@chakra-ui/react'
import Trusted from "../components/Home-Components/Trusted";
import Hero from "../components/Home-Components/Hero";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Design from "../components/Home-Components/Design";
import Subscription from "../components/Home-Components/Subscription";
export default function Home() {
  return (
    <>

      <Navbar />
      <Box textAlign="center" p="20px">
        <Hero />
        <Design />
        <Heading >Streamline Revenue Operations</Heading>
        <Text m="10px auto" w={{ base: "90%", md: "30%" }} >Chargebee automates the lead-to-ledger workflow across your revenue stack, so you can dream, deploy, and enjoy the breeze.
          While the MRR just keeps rolling.</Text>
        <Revenue />
        <Trusted />
        <Subscription />
      </Box>
      <Footer />

    </>
  )
}
