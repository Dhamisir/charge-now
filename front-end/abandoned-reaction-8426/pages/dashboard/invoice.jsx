import DashboardSidebar from "../../components/dashboardSidebar";
import { Stack, Input, Textarea, Text, Flex, Spacer, Heading, Button, Box, Spinner, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import Head from 'next/head'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { HandleTokenLogin } from "../../Redux/Login/login.actions";

export default function Invoice() {
    const {user, isAuth} = useSelector(state=>state.login)
    const nav = useRouter()
    const dispatch = useDispatch()

    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(!isAuth && token==null){
            nav.push('/login')
            return 
        }
        if(token!=null){
            dispatch(HandleTokenLogin())
            return
        }
    }, [])

    if(isAuth){
        return (
            <Box>
            <Head>
                <title>
                    Dashboard | Invoice
                </title>
            </Head>
        <Flex
            backgroundColor={'#EAEAF4'}
            overflow={'hidden'}
            fontFamily={'MAIN'}
        >
            <DashboardSidebar />
            <Spacer></Spacer>
            <Stack
            h='700px'
            w='80%'
            spacing='30px'
            >
                <Stack
                p='3%'
                pl='5%'
                w='100%'
                backgroundColor={'white'}
                boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
                >
                    <Heading>Welcome, {user.name}</Heading>
                    <Text>Check your Invoce Details</Text>
                </Stack>
                <Stack
                alignSelf={'center'}       
                w='70%'
                p='3%'
                backgroundColor={'white'}
                borderRadius='10px'
                boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
                >
                    <Heading
                    mb='30px'
                    >You are currently enrolled with us!</Heading>
                    <Text
                    fontSize={'xl'}
                    >You are on <b>{user.serviceName || "Basic"}</b> service plan currently.</Text>
                    <Text
                    fontSize={'xl'}
                    mb='20px'
                    >
                    {user.remainingEmail <=20 ? "Oops! You are running low on remaining emails." : "Congrats!" } You have <b>{user.remainingEmail}</b> emails remaining in your package.
                    </Text>
                    {user.remainingEmail <=20 ? 
                    <Button
                    w='30%'
                    onClick={()=>{
                        nav.push('/dashboard/Services')
                    }}
                    >
                        Upgrade your plan!
                    </Button>
                    :
                    <Button 
                    colorScheme={'whatsapp'}
                    w='30%'
                    onClick={()=>{
                        nav.push('/dashboard/home')
                    }}
                    >
                        Start sending mails
                    </Button>}
                </Stack>
            </Stack>
        </Flex>
            </Box>
        )
    } else {
        return (
            <>
                <Stack
                w='fit-content'
                h='fit-content'
                alignSelf='center'
                justifySelf='center'
                >
                <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                />

                </Stack>
            </> 
        )
    }
}