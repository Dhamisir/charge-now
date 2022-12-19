import DashboardSidebar from "../../components/dashboardSidebar";
import { Stack, Input, Textarea, Text, Flex, Spacer, Heading, Button, Box, Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Head from 'next/head'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import io from 'socket.io-client'
import { CheckIcon } from '@chakra-ui/icons'
import { HandleTokenLogin } from "../../Redux/Login/login.actions";

const initState = {
    email: "",
    subject: '',
    body: ''
}
let API = process.env.NEXT_PUBLIC_API_LINK;
export default function Home() {
    let socket = io.connect(API)
    const toast = useToast()
    const { user, isAuth } = useSelector(state => state.login)
    const nav = useRouter()
    const [form, changeForm] = useState(initState)
    const [emailSent, changeEmailSent] = useState(0)
    const [statHidden, changeStatHidden] = useState(true)
    const dispatch = useDispatch()

    console.log(API)
    const sendMails = async () => {
        changeEmailSent(0)
        if (form.subject == "" || form.body == "") {
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

        if (user.remainingEmail < user.serviceEmail.length) {
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

        let res = await axios.post(`${API}/mailer/sendmail`, form)
        changeStatHidden(false)
        let data = await res.data

        if (data.error == false) {
            changeForm({
                ...initState
            })
        } else {
            changeError("Mail sending failed")
        }
    }

    const handleChange = (e) => {
        changeStatHidden(true)
        let name = e.target.name
        changeForm({
            ...form,
            [name]: e.target.value,
            email: user.email
        })
    }

    useEffect(() => {
        socket.on('new', (num) => {
            changeEmailSent(num)
        })
    }, [socket])

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

    if (isAuth) {
        return (
            <Box>
                <Head>
                    <title>
                        Dashboard | Home
                    </title>
                </Head>
                <Flex
                    backgroundColor={'#EAEAF4'}
                    overflow={'hidden'}
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
                            <Textarea placeholder={'Enter Email Body'} name='body' onChange={handleChange} value={form.body} />
                            <Button
                                colorScheme='whatsapp'
                                w='30%'
                                onClick={sendMails}
                            >Send emails</Button>
                        </Stack>
                        <Flex
                            hidden={statHidden}
                            alignSelf={'center'}
                            w='70%'
                        >
                            {emailSent / user.serviceEmail.length == 1 ? <CheckIcon mr='10px' w='25px' h='25px' /> : <Spinner mr='10px' />}
                            <Text
                                fontSize={'20px'}
                            >
                                {emailSent}/{user.serviceEmail.length} mails sent successfully!
                            </Text>
                        </Flex>
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