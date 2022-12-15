import DashboardSidebar from "../../components/DashboardSidebar";
import { Stack, Text, Flex, Spacer, Heading, Input, Button } from "@chakra-ui/react";
import Head from 'next/head'
import SingleMailDisplay from "../../components/SingleMailDisplay";
import { useSelector } from "react-redux";

export default function Home() {
    const {mailinglist} = useSelector(state=>state)
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

            <Stack
            w='80%'
            alignSelf={'center'}
            >
                <Flex
                backgroundColor={'white'}
                w='60%'
                p='15px'
                borderRadius={'10px'}
                alignSelf='center'
                >
                    <Input placeholder="Add new email" border='black' w='70%' colorScheme={'whatsapp'} />
                    <Button colorScheme={'whatsapp'}>Add new email</Button>
                </Flex>
                <SingleMailDisplay email='sakshamselwal@gmail.com' />
            </Stack>
        </Stack>
    </Flex>
        </>
    )
}