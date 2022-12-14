import DashboardSidebar from "../../components/DashboardSidebar";
import { Stack, Text, Flex, Spacer, Heading } from "@chakra-ui/react";
import Head from 'next/head'
export default function Home() {

    return (
        <>
        <Head>
            <title>
                Dashboard | Mailing List
            </title>
        </Head>
    <Flex
        backgroundColor={'#EAEAF4'}
    >
        <DashboardSidebar />
        <Spacer></Spacer>
        <Stack
        w='80%'
        h='621px'
        spacing='30px'
        >
            <Stack
            p='3%'
            pl='5%'
            w='100%'
            backgroundColor={'white'}
            boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
            >
                <Heading>Welcome, User</Heading>
                <Text>View/Update your mailing list here</Text>
            </Stack>
        </Stack>
    </Flex>
        </>
    )
}