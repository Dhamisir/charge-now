import DashboardSidebar from "../../../components/DashboardSidebar";
import { Stack, Text, Flex, Spacer, Heading, Box, Input, Button, useToast, TableContainer, Table, Thead, Tr, Th, Tbody, Td, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import Head from 'next/head'
import SingleMailDisplay from "../../../components/SingleMailDisplay";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import { useRouter } from "next/Router";
import { Spinner } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { AddEmail, HandleTokenLogin } from '../../../Redux/Login/login.actions'

let API = process.env.NEXT_PUBLIC_API_LINK

export default function Home() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        billing_period: 0,
        billing_period_unit: "month",
        emailCount: 0,
        currency_code: "USD",
        object: "",
        serviceAmount: ""
    });
    const { user, isAuth } = useSelector(state => state.login)
    const nav = useRouter();

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (!isAuth && token == null) {
            nav.push('/login')
            return
        }
        if (token != null) {
            dispatch(HandleTokenLogin())
            return
        }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        // console.log(form)
        // http://localhost:8080/chargebee/software/newSoftware
        let data = await axios.post(`${API}/chargebee/software/newSoftware`, form).then(() => {
            alert("Software Created Succssfull")
        }).catch((err) => {
            alert("Something Wrong.... Try After Sometimes")
        })

    }


    if (isAuth) {
        return (
            <>
                <Head>
                    <title>
                        Dashboard |  Add Plans
                    </title>
                </Head>
                <Flex
                    backgroundColor={'#EAEAF4'}
                >
                    <DashboardSidebar />
                    <Spacer></Spacer>
                    <Stack
                        w='80%'
                        m="0px 0px 20px 0px"
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
                            <Text>View All User here</Text>
                        </Stack>

                        <Stack w='80%' alignSelf={'center'} >
                            <FormControl bg="white" p="20px">
                                <FormLabel>Billing Period</FormLabel>
                                <Input onChange={handleChange} name="billing_period" type='number' />
                                <FormLabel>Billing Period Unit</FormLabel>
                                <Input onChange={handleChange} name="billing_period_unit" type='text' placeholder="only month/year" />
                                <FormLabel>Email Count</FormLabel>
                                <Input onChange={handleChange} name="emailCount" type='Number' />
                                <FormLabel>Currency Code</FormLabel>
                                <Input placeholder="USD/INR" onChange={handleChange} name="currency_code" type='text' />
                                <FormLabel>Object</FormLabel>
                                <Input onChange={handleChange} name="object" type='text' />
                                <FormLabel>Service Amount</FormLabel>
                                <Input onChange={handleChange} name="serviceAmount" type='text' />
                                <Button
                                    mt={4}
                                    colorScheme='purple'
                                    type='submit'
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            </FormControl>
                        </Stack>
                    </Stack>
                </Flex>
            </>
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
