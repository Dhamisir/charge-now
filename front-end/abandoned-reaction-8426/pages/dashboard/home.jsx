import DashboardSidebar from "../../components/DashboardSidebar";
import { Stack, Input, Textarea, Text, Flex, Spacer, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";
import Head from 'next/head'

const initState = {
    email:"",
    subject:'',
    body:''
}

export default function Home() {
    const [form, changeForm] = useState(initState)

    const handleChange = (e) => {
        let name = e.target.name
        changeForm({
            ...form,
            [name]:e.target.value
        })
    }

    const sendEmails = ()=>{
        console.log(form)
        changeForm({
            ...initState
        })
    }

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
                <Heading>Welcome, User</Heading>
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
                onClick={sendEmails}
                >Send emails</Button>
            </Stack>
        </Stack>
    </Flex>
        </>
    )
}