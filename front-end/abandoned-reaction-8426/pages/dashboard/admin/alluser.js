import DashboardSidebar from "../../../components/DashboardSidebar";
import { Stack, Text, Flex, Spacer, Heading, Box, Input, Button, useToast, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import Head from 'next/head'
import SingleMailDisplay from "../../../components/SingleMailDisplay";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import { useRouter } from "next/Router";
import { Spinner } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { AddEmail, HandleTokenLogin } from '../../../Redux/Login/login.actions'

let API = process.env.NEXT_PUBLIC_API_LINK

export default function Home({ userData }) {
    // console.log("userData", userData)
    const [page, setPage] = useState(1);
    const toast = useToast()
    const { user, isAuth } = useSelector(state => state.login)
    const nav = useRouter();
    const dispatch = useDispatch()
    // console.log("env", process.env.NEXT_PUBLIC_API_LINK)
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


    if (isAuth) {
        return (
            <>
                <Head>
                    <title>
                        Dashboard | All User
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
                            <Box textAlign="center">
                                {/* <Button disabled={page == 1} m="5px" colorScheme='purple'>Prev</Button>
                                <Button m="5px" colorScheme='purple'>{page}</Button>
                                <Button m="5px" colorScheme='purple'>Next</Button> */}
                            </Box>
                            <TableContainer bg="white">
                                <Table variant='striped' colorScheme='teal'>
                                    <Thead>
                                        <Tr>
                                            <Th>Name</Th>
                                            <Th>Email</Th>
                                            <Th>Company Name</Th>
                                            <Th>Remaining Email</Th>
                                            <Th>Role</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {
                                            userData.Users.map((ele) => (
                                                <Tr>
                                                    <Td>{ele.name}</Td>
                                                    <Td>{ele.email}</Td>
                                                    <Td>{ele.companyName}</Td>
                                                    <Td>{ele.remainingEmail}</Td>
                                                    <Td>{ele.role}</Td>
                                                </Tr>
                                            ))
                                        }
                                    </Tbody>
                                </Table>
                            </TableContainer>
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

export async function getServerSideProps(context) {
    let user = await axios.get(`${API}/chargebee/user/Alluserdata`)
    console.log(user.data)
    return {
        props: {
            userData: user.data
        }, // will be passed to the page component as props
    }
}