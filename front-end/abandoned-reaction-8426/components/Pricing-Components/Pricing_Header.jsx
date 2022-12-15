import { Box, Button, Flex, Grid, GridItem, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const pricingData = [
    {
        symbol: "USD",
        m1a: 0,
        m1b: "USD 100k",
        rev1: "0%",
        m2a: 249,
        m2b: "USD 600k",
        rev2: "0.6%",
        m3a: 549,
        m3b: "USD 1.2M",
        rev3: "0.75%"
    },
    {
        symbol: "EUR",
        m1a: 0,
        m1b: "EUR 90k",
        rev1: "0%",
        m2a: 249,
        m2b: "EUR 600k",
        rev2: "0.6%",
        m3a: 549,
        m3b: "EUR 1.2M",
        rev3: "0.75%"
    },
    {
        symbol: "GBP",
        m1a: 0,
        m1b: "GBP 80k",
        rev1: "0%",
        m2a: 199,
        m2b: "GBP 480k",
        rev2: "0.6%",
        m3a: 379,
        m3b: "GBP 960k",
        rev3: "0.75%"
    },
    {
        symbol: "AUD",
        m1a: 0,
        m1b: "AUD 140k",
        rev1: "0%",
        m2a: 359,
        m2b: "AUD 840k",
        rev2: "0.6%",
        m3a: 729,
        m3b: "AUD 1.56M",
        rev3: "0.75%"
    },
    {
        symbol: "GAD",
        m1a: 0,
        m1b: "GAD 130k",
        rev1: "0%",
        m2a: 329,
        m2b: "GAD 720k",
        rev2: "0.6%",
        m3a: 599,
        m3b: "GAD 1.56M",
        rev3: "0.75%"
    },
    {
        symbol: "INR",
        m1a: 0,
        m1b: "INR 80L",
        rev1: "0%",
        m2a: 19915,
        m2b: "INR 4.8 Crores",
        rev2: "0.6%",
        m3a: 43915,
        m3b: "INR 9.6 Crores",
        rev3: "0.75%"
    }

]

const Pricing_Header = () => {
    const data = pricingData[0];
    const [price, setPrice] = useState(data);
    const [offer, setOffer] = useState("billed annually")
    // console.log(price);

    return (
        <>
            <Box w="80%" m="50px auto">
                <Heading fontSize={{ base: "4xl", md: "6xl" }}>Find a plan that's right for you</Heading>
                <Text fontSize="2xl" m="20px 0px">Or simply leverage the expertise of our consultation team.</Text>
                <Flex m="10px 0px" gridGap={"10"}>
                    <Box >
                        <Button m="5px" bg='#6D00C1' colorScheme="#6D00C1" color="white" onClick={() => { setOffer("billed annually") }}>Annual</Button>
                        <Button m="5px" bg='#6D00C1' colorScheme="#6D00C1" color="white" onClick={() => { setOffer("") }}>Monthly</Button>
                    </Box>
                    <Box>
                        <Button m="5px" bg='#6D00C1' colorScheme="#b766ff" color="white" onClick={() => { setPrice(pricingData[0]) }}>USD</Button>
                        <Button m="5px" bg='#6D00C1' colorScheme="#b766ff" color="white" onClick={() => { setPrice(pricingData[1]) }}>EUR</Button>
                        <Button m="5px" bg='#6D00C1' colorScheme="#b766ff" color="white" onClick={() => { setPrice(pricingData[2]) }}>GBP</Button>
                        <Button m="5px" bg='#6D00C1' colorScheme="#b766ff" color="white" onClick={() => { setPrice(pricingData[3]) }}>AUD</Button>
                        <Button m="5px" bg='#6D00C1' colorScheme="#b766ff" color="white" onClick={() => { setPrice(pricingData[4]) }}>CAD</Button>
                        <Button m="5px" bg='#6D00C1' colorScheme="#b766ff" color="white" onClick={() => { setPrice(pricingData[5]) }}>INR</Button>
                    </Box>
                </Flex>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }} gap={6}>
                    <GridItem w='100%' boxShadow="lg" p="20px">
                        <Text fontSize="2xl" fontWeight="bold">Launch</Text>
                        <Text>For early-stage startups that want to spend more time developing and less on manual operations.</Text>
                    </GridItem>
                    <GridItem w='100%' boxShadow="lg" p="20px">
                        <Text fontSize="2xl" fontWeight="bold">Rise</Text>
                        <Text>For agile startups that want to grow their revenue with quick experiments and data-driven decision making.</Text>
                    </GridItem>
                    <GridItem w='100%' boxShadow="lg" p="20px">
                        <Text fontSize="2xl" fontWeight="bold">Scale</Text>
                        <Text>For fast-growth scaleups that want to grow by maximizing efficiencies in their revenue operations.</Text>
                    </GridItem>
                    <GridItem w='100%' boxShadow="lg" p="20px">
                        <Text fontSize="2xl" fontWeight="bold">Enterprise</Text>
                        <Text>For large businesses looking for enterprise-class compliance while diversifying revenue streams.</Text>
                    </GridItem>
                </Grid>

                <Grid m="20px 0px" gridGap={"5"} templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}>

                    {/* first */}
                    <GridItem w='100%' boxShadow="lg" p="20px">
                        <Text fontSize="sm" fontWeight="bold" color="#6D00C1">{price.symbol}</Text>
                        <Text m="10px 0px" fontSize="2xl" fontWeight="bold">{price.m1a}/mo</Text>
                        <Text fontSize="mg" fontWeight="bold">{offer}</Text>
                        <Text m="20px 0px" >for your first <Text as="b">{price.m1b}</Text> in revenue What happens when I hit <Text as="b">{price.rev1}</Text></Text>
                        <Button p="20px" bg='#6D00C1' colorScheme="#b766ff" color="white">Get Started For Free</Button>
                        <Text m="20px 0px" fontWeight="bold" >All you need to get started</Text>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Secure checkout (.js and hosted)
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Support up to 6 pricing models
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Issue credit notes
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Dunning
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                A/R aging report
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Customer portal
                            </ListItem>
                        </List>
                    </GridItem>

                    {/* second */}
                    <GridItem w='100%' boxShadow="lg" p="20px">
                        <Text fontSize="sm" fontWeight="bold" color="#6D00C1">{price.symbol}</Text>
                        <Text m="10px 0px" fontSize="2xl" fontWeight="bold">{price.m2a}/mo</Text>
                        <Text fontSize="mg" fontWeight="bold">{offer}</Text>
                        <Text m="20px 0px" >for your first <Text as="b">{price.m2b}</Text> in revenue What happens when I hit <Text as="b">{price.rev2}</Text></Text>
                        <Button p="20px" bg='#6D00C1' colorScheme="#b766ff" color="white">Schedule a demo </Button>
                        <Text m="20px 0px" fontWeight="bold" >Everything in Launch </Text>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Custom domain
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Multi-language support
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Sales tax automation
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Advanced analytics
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                CRM integration
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Accounting integration
                            </ListItem>
                        </List>
                    </GridItem>

                    {/* third */}
                    <GridItem w='100%' boxShadow="lg" p="20px">
                        <Text fontSize="sm" fontWeight="bold" color="#6D00C1">{price.symbol}</Text>
                        <Text m="10px 0px" fontSize="2xl" fontWeight="bold">{price.m3a}/mo</Text>
                        <Text fontSize="mg" fontWeight="bold">{offer}</Text>
                        <Text m="20px 0px" >for your first <Text as="b">{price.m3b}</Text> in revenue What happens when I hit <Text as="b">{price.rev3}</Text></Text>
                        <Button p="20px" bg='#6D00C1' colorScheme="#b766ff" color="white">Schedule a demo </Button>
                        <Text m="20px 0px" fontWeight="bold" >Everything in Rise </Text>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                User role management
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Multiple payment methods
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Advance invoices
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Multiple tax profiles
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Smart dunning
                            </ListItem>
                        </List>
                    </GridItem>

                    {/* fourth */}
                    <GridItem w='100%' boxShadow="lg" p="20px">
                        <Text fontSize="4xl" fontWeight="bold">Custom</Text>
                        <Text m="20px 0px" >Get a quote tailored to your requirements.</Text>
                        <Button p="20px" bg='#6D00C1' colorScheme="#b766ff" color="white">Schedule a demo </Button>
                        <Text m="20px 0px" fontWeight="bold" >Everything in Scale</Text>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Contract terms
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Account hierarchy
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Quotes
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Chargeback automation
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Dedicated CSM
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='#6D00C1' />
                                Priority phone support
                            </ListItem>
                        </List>
                    </GridItem>

                </Grid>
            </Box>
        </>
    )
}

export default Pricing_Header