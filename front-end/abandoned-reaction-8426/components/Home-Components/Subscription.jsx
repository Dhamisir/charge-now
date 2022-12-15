import { Box, Flex, Grid, GridItem, Heading, IconButton, Image, Input, Stack, Text } from "@chakra-ui/react"
import { BiMailSend } from "react-icons/bi"

const Subscription = () => {
    return (
        <>
            <Box p={{ base: "0px", sm: "50px" }} w="80%" m="30px auto">
                <Grid alignItems="center" templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={6}>
                    <GridItem w='100%'>
                        <Heading>Get a Demo Customized to Your Subscription Workflow</Heading>
                        <Flex m="30px 0px" justifyContent="center">
                            <Input
                                w={{ base: "100%", md: "70%" }}
                                fontSize="15px"
                                p="20px"
                                placeholder={'Your email address'}
                                border={"2px solid #432297"}
                            />
                            <IconButton
                                m="0px 10px"
                                color="white"
                                bg="#432297"
                                _hover={{
                                    color: "white",
                                    bg: '#432297',
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Flex>
                    </GridItem>
                    <GridItem w='100%' p="20px">
                        <Box textAlign="left" w={{ base: "80%", md: "70%" }} m="auto" p="50px 20px" boxShadow="xl">
                            <Image borderRadius="50%" w="50%" src="https://webstatic.chargebee.com/assets/web/543/images/footer/robin-lambert.png" />
                            <Text m="20px 0px">Using Chargebee is also one less area we have to worry about as we scale. We know that it'll adapt to most if not all situations that'll come up in the future.</Text>
                            <Text fontWeight="bold">Robin Lambert,</Text>
                            <Text>Co-founder & CPO, Livestorm</Text>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </>
    )
}

export default Subscription