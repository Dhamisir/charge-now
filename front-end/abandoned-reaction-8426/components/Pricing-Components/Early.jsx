import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"

const Early = () => {
    return (
        <>
            <Grid alignItems="center" m="50px auto" w="80%" templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={6}>
                <GridItem w='100%' >
                    <Image w="70%" src="https://webstatic.chargebee.com/assets/web/543/images/pricings/plan.svg" />
                </GridItem>
                <GridItem p="20px" w='100%'>
                    <Heading>For Early Stage Startups</Heading>
                    <Text m="10px 0px" fontSize="lg">Are you a newly launched business making less than USD 100K in revenue? Chargebee for Startups is meant for you. Focus on building and launching your product, while we take care of your billing.</Text>
                </GridItem>
            </Grid>
        </>
    )
}

export default Early