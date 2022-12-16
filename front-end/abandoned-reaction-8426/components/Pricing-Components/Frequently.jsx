import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"

const accData = [
    {
        head: "Is your pricing model based on invoices or revenue?",
        para: "Our default pricing model is based on revenue. But, if you believe invoice-based pricing suits your business better, let us know and we'll be happy to accommodate it."
    },
    {
        head: "What is counted as revenue?",
        para: "The total value of invoices generated, excluding void invoices."
    },
    {
        head: "Will I have to pay separately for multiple sites with Chargebee?",
        para: "We do not charge extra for the additional sites you create, and the charges will only be based on the total revenue (or number of invoices) generated across all your sites."
    },
    {
        head: "Do I get a sandbox (test environment)?",
        para: "Absolutely. We provide a free TEST environment with every domain signed-up with us. You may use it to explore, develop & test before you go LIVE."
    },
    {
        head: "Is EU VAT included in the pricing?",
        para: "The Prices as applicable are exclusive of EU VAT to EU Merchants and shall be charged additionally for B2C merchants in accordance with EU VAT Rules."
    }
]

const Frequently = () => {
    return (
        <>
            <Grid w="80%" m="20px auto" templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={6}>
                <GridItem w='100%'>
                    <Heading textAlign="center" m="20px 0px">Frequently Asked Questions</Heading>
                    <Accordion w="90%" m="auto" allowToggle>
                        {
                            accData.map((ele) => (
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box fontSize="md" p="20px 5px" as="span" flex='1' textAlign='left'>
                                                {ele.head}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} p="20px 10px">
                                        {ele.para}
                                    </AccordionPanel>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </GridItem>
                <GridItem w='100%' p="20px">
                    <Box textAlign="left" w={{ base: "80%", md: "70%" }} m="auto" p="50px 20px" boxShadow="xl">
                        <Image borderRadius="50%" w="50%" src="https://webstatic.chargebee.com/assets/web/543/images/customers/will-jennings.png" />
                        <Text m="20px 0px">Being able to automatically reconcile Stripe payments, transfers and fees is a huge win and as with everything Chargebee does, it's solid and feels like they've thought of everything.</Text>
                        <Text fontWeight="bold">Will Jennings</Text>
                        <Text>Managing Director, Countfires</Text>
                    </Box>
                </GridItem>
            </Grid>
        </>
    )
}

export default Frequently