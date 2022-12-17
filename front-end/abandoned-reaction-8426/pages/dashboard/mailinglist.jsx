import DashboardSidebar from "../../components/DashboardSidebar";
import { Stack, Text, Flex, Spacer, Heading, Box, Input, Button, useToast, SimpleGrid } from "@chakra-ui/react";
import Head from 'next/head'
import SingleMailDisplay from "../../components/SingleMailDisplay";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import { useRouter } from "next/Router";
import { Spinner } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import {AddEmail } from '../../Redux/Login/login.actions'

export default function Home() {
    const toast = useToast()
    const {user, isAuth} = useSelector(state=>state.login)
    const dispatch = useDispatch()
    const [email, changeEmail] = useState('')
    const nav = useRouter()
    const [error, changeError] = useState('')

    const handleAddEmail = async () => {
        changeError('')
        if(email==''){
            return changeError('Email can not be empty!')
        } 
        if(!email.includes('@') || !email.includes(".com")){
            return changeError('Invalid email!')
        }
        if(user.serviceEmail.includes(email)){
            return changeError('Email already present')
        }
        const res = await axios.post("http://localhost:8080/mailer/addServiceEmail", {
            "email":user.email,
            "adderEmail":email
        })
        const data = await res.data

        if(!data.error){
            dispatch(AddEmail(data.serviceEmail))
            toast({
                position: 'bottom-left',
                render: () => (
                    <Box color='white' p={3} bg='green' borderRadius={'5px'}>
                    Email added successfully
                    </Box>
                ),
            })
            changeEmail('')
        } else {
            toast({
                position: 'bottom-left',
                render: () => (
                  <Box color='white' p={3} bg='green' borderRadius={'5px'}>
                    Email add failed
                  </Box>
                ),
              })
        }
    }

    const handleOnChange = (e)=>{
        changeEmail(e.target.value)
    }

    useEffect(()=>{
        if(!isAuth){
            nav.push('/login')
            return 
        }        
    }, [])

    if(isAuth){
        return (
            <>
            <Head>
                <title>
                    Dashboard | Mailing List
                </title>
            </Head>
        <Flex
            backgroundColor={'#EAEAF4'}
            h='700px'
        >
            <DashboardSidebar />
            <Spacer></Spacer>
            <Stack
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
                        <Input type={'email'} placeholder="Add new email" border='black' w='70%' onChange={handleOnChange} value={email} colorScheme={'whatsapp'} />
                        <Button onClick={handleAddEmail} colorScheme={'whatsapp'}>Add new email</Button>
                    </Flex>
                    <Stack
                    alignSelf={'center'}
                    w='fit-content'
                    >
                        <Text
                        fontSize='20px'
                        >{error}</Text>
                    </Stack>
                    {user.serviceEmail.length==0 ? 
                    <Stack
                    alignSelf={'center'}
                    w='fit-content'
                    >
                        <Text
                        fontSize='20px'
                        >Start adding emails to your mailing list</Text>
                    </Stack>
                    : 
                    <SimpleGrid columns={'2'} spacing='25px'>
                        {user.serviceEmail.map(ele=>{
                            return <SingleMailDisplay email={ele} />
                        })}
                    </SimpleGrid>
    }
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