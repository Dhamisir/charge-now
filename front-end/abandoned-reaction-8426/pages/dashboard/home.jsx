import DashboardSidebar from "../../components/DashboardSidebar";
import { Stack, Input, Textarea, Text, Flex, Spacer, Heading, Button, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Head from 'next/head'
import axios from 'axios'
import { useSelector } from "react-redux";
import { useRouter } from "next/Router";
import { Spinner } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react';

const initState = {
    email:"",
    subject:'',
    body:''
}

export default function Home() {
    const toast = useToast()
    const {user, isAuth} = useSelector(state=>state.login)
    const nav = useRouter()
    const [form, changeForm] = useState(initState)
    const [error, changeError] = useState("")
    
    

    const sendMails = async () => {
        if(form.subject=="" || form.body==""){
            toast({
                position: 'bottom-left',
                render: () => (
                  <Box color='white' p={3} bg='red' borderRadius={'5px'}>
                    Email body or subject can not be empty.
                  </Box>
                ),
              })
            return 
        }

        if(user.remainingEmail<user.serviceEmail.length){
            toast({
                position: 'bottom-left',
                render: () => (
                  <Box color='white' p={3} bg='red' borderRadius={'5px'}>
                    You don't have enough emails to make this request.
                  </Box>
                ),
              })
            return 
        }

        let res = await axios.post('http://localhost:8080/mailer/sendmail', form)
        let data = await res.data


        if(data.error==false){
            changeError('Mails sent successfully!')
            setTimeout(()=>{
                changeError('')
            }, 7000)
            changeForm({
                ...initState
            })
        } else {
            changeError("Mail sending failed")
        }
    }

    const handleChange = (e) => {
        let name = e.target.name
        changeForm({
            ...form,
            [name]:e.target.value,
            email:user.email
        })
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
                    Dashboard | Home
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
                    <Heading>Welcome, {user.name}</Heading>
                    <Text>Ready to send Mails?</Text>
                </Stack>
                <Stack
                alignSelf={'center'}       
                w='70%'
                p='2%'
                backgroundColor={'white'}
                borderRadius='10px'
                boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
    
                >
                    <Text>Subject of your emails:</Text>
                    <Input 
                    placeholder="Enter Subject"
                    w='45%'
                    name='subject'
                    onChange={handleChange}
                    value={form.subject}
                    />
                    <Text>Email Body:</Text>
                    <Textarea placeholder={'Enter Email Body'} name='body' onChange={handleChange} value={form.body}/>
                    <Button 
                    colorScheme='whatsapp'
                    w='30%'
                    onClick={sendMails}
                    >Send emails</Button>
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