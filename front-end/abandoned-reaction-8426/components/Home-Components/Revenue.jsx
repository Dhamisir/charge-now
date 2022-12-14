import { Grid, GridItem, Heading, Image, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons'

const revenueData = [
    {
        heading: "Automate the Order-to-Revenue Lifecycle",
        para: "Collect recurring payments and automate your subscription billing logic - from checkout to reconciliation.",
        l1: "Quote-to-Cash",
        l2: "Trial Management",
        l3: "Tax Management",
        l4: "Lifecycle Automation",
        link: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/subscription-automation.svg"
    },
    {
        heading: "Align Billing Workflow with GTM Strategy",
        para: "Adjust price structures, product bundles, discount management, and recovery processes to maximize revenue.",
        l1: "Price-modeling",
        l2: "Usage-based Billing",
        l3: "Plan & Product Catalog",
        l4: "480+ Billing Scenarios",
        link: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/billing-experiments.svg"
    },
    {
        heading: "Drive Decisions with 360° Revenue Reporting",
        para: "Recognize revenue accurately, forecast business growth, and plug leaks across your order-to-revenue cycle with real-time insights.",
        l1: "Deferred Revenue Reporting",
        l2: "Revenue Recognition",
        l3: "Churn Reporting",
        l4: "Report Builder",
        link: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/revenue-intelligence.svg"
    },
    {
        heading: "Scale Revenue Stack for Each Stage of Growth",
        para: "Upgrade finance, accounting, CRM, and more, on the revenue engine that scales with you.",
        l1: "Sales, Revenue & Marketing",
        l2: "Accounting & Finance",
        l3: "Support & Engagement",
        l4: "Inventory & Logistics",
        link: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/integration.svg"
    },
    {
        heading: "Promise Secure Subscription Experiences",
        para: "Stay compliant with the latest taxation and privacy regulations to enter and scale new markets with agility.",
        l1: "SOC1 & SOC 2 Compliant",
        l2: "GDPR Ready",
        l3: "PCI-DSS Level 1",
        l4: "99.9% Uptime",
        link: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/security.png"
    },
]

export default function Revenue() {
    console.log(revenueData)
    return (
        <>
            {
                revenueData.map((ele) => (
                    <Grid alignItems="center" w={{ base: "90%", md: "60%" }} m="30px auto" templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2,1fr)' }} gap={6}>
                        <GridItem w='100%'>
                            <Text fontWeight="bold" fontSize='xl'>{ele.heading}</Text>
                            <Text m="20px 0px " fontSize='md'>{ele.para}</Text>
                            <List w="50%" m="auto" spacing={3} textAlign="left">
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color='purple.500' />
                                    {ele.l1}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color='purple.500' />
                                    {ele.l2}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color='purple.500' />
                                    {ele.l3}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color='purple.500' />
                                    {ele.l4}
                                </ListItem>
                            </List>
                        </GridItem>
                        <GridItem w='100%'>
                            <Image src={ele.link} />
                        </GridItem>
                    </Grid>
                ))
            }
        </>
    )
}