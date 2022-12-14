import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"

const Trusted = () => {
    return (
        <Box p="25px" boxShadow='dark-lg' w={{ base: "90%", md: "60%" }} m="auto" >
            <Grid alignItems="center" templateColumns={{ base: 'repeat(1,1fr)', xl: "20% 70%" }} gap={6}>
                <GridItem w='100%'>
                    <Image m="auto" w={{ base: "50%", xl: "100%" }} src="https://webstatic.chargebee.com/assets/web/543/images/g2-badge-collection/chargebee-leader-subscription-management-g2-spring.svg" />
                </GridItem>
                <GridItem m="20px" w='100%'>
                    <Heading fontSize={{ base: "xl", md: "2xl" }}>Trusted partner in 4500+ growth stories...</Heading>
                    <Grid m="20px 0px 0px 0px" templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(4, 1fr)' }} gap={6}>
                        <GridItem w='100%' >
                            <Text fontSize="xl" fontWeight="bold">94%</Text>
                            <Text>Most likely to recommend</Text>
                        </GridItem>
                        <GridItem w='100%' >
                            <Text fontSize="xl" fontWeight="bold">1.3</Text>
                            <Text>Avg. months to go live</Text>
                        </GridItem>
                        <GridItem w='100%' >
                            <Text fontSize="xl" fontWeight="bold">#1</Text>
                            <Text>Subscription Billing Software</Text>
                        </GridItem>
                        <GridItem w='100%' >
                            <Text fontSize="xl" fontWeight="bold">98%</Text>
                            <Text>Rated 4+ stars on 5</Text>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </Box >
    )
}

export default Trusted