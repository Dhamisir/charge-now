import { Grid, GridItem, Heading, Image, InputLeftElement, Text } from "@chakra-ui/react"

const designData = [
    {
        url: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/rethink-pricing.svg",
        head: "Rethink Pricing",
        para: "Pricing models. Grandfathering. One-click roll-back. Doesn't get easier"
    },
    {
        url: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/scale-globally.svg",
        head: "Scale Globally",
        para: "  Currencies, compliance & taxes, all handled already."
    },
    {
        url: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/capture-new-segments.svg",
        head: "  Capture New Segments",
        para: "March upmarket, go product-led, and everywhere between."
    },
    {
        url: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/launch-into-subscriptions.svg",
        head: "Launch into Subscriptions",
        para: "Pilot a recurring revenue model without breaking what's working."
    }
]

const Design = () => {
    return (
        <>
            <Grid alignItems="center" w="80%" m="50px auto" templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
                <GridItem p="10%" w='100%' >
                    <Heading m="20px" fontSize="2xl">Designed to go Beyond Billing.
                    </Heading>
                    <Text>Get the freedom to experiment, launch, and scale strategies as fast as you can think of them.</Text>
                </GridItem>
                <GridItem w='100%'>
                    <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }} gap={6}>
                        {
                            designData.map((ele) => (
                                <GridItem boxShadow='lg' textAlign="left" p="20px" w='100%' _hover={{
                                    shadow: 'md',
                                    transform: 'translateY(-10px)',
                                    transition: '0.5s',
                                }}>
                                    <Image src={ele.url} />
                                    <Text fontWeight="bold" m="5px 0px">{ele.head}</Text>
                                    <Text>{ele.para}</Text>
                                </GridItem>
                            ))
                        }
                    </Grid>
                </GridItem>
            </Grid>
        </>
    )
}

export default Design