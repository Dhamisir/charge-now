import {Stack, Text, Button, Box, Flex, Spacer} from '@chakra-ui/react'
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {useSelector} from 'react-redux'
import { BiSupport } from "react-icons/bi";
import Link from 'next/Link'
import {useRouter} from 'next/Router'

export default function DashboardSidebar() {
    let auth = useSelector(state=>state)
    let nav = useRouter() 

    return (
        <>
        <Stack 
        borderRadius={'10px'}
        boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px;'
        height='621px'
        backgroundColor={'white'}
        w='20%'
        position='fixed'
        p='0.5%'
        pt='1%'
        pb='2%'
        >
            <Stack 
            backgroundColor='#2C0069'
            borderRadius='10px'
            color='white'
            p='3%'
            >
                <Text>Aerosur</Text>
                <Text>aerosur.test@chargenow.com</Text>
                <Button colorScheme='whatsapp' rightIcon={<ArrowForwardIcon />}>Select Plan</Button>
            </Stack>
            <Stack
            >
                <Button 
                hidden={auth.role=='admin'?true:false}
                onClick={()=>{
                    nav.push('/dashboard/home')
                }}
                >Home</Button>
                <Button 
                hidden={auth.role=='admin'?true:false}
                onClick={()=>{
                    nav.push('/dashboard/mailinglist')
                }}
                >
                    Mailing List
                </Button>
                <Button>Subscriptions</Button>
                <Button hidden={auth.role=='admin'?true:false}>Invoice</Button>
                <Button hidden={auth.role=='admin'?false:true}>Users</Button>
                <Button hidden={auth.role=='admin'?false:true}>Add Plans</Button>
            </Stack>
            <Spacer></Spacer>
            <Stack>
            <Button leftIcon={<BiSupport />}>Need Help?</Button>
            <Flex
            pl='20px'
            >
                <Box 
                backgroundColor='purple'
                borderRadius='50%'
                w='40px'
                h='40px'
                mr='20px'
                >
                    <Text
                    fontWeight='bold'
                    color='white'
                    textAlign='center'
                    mt='7px'
                    >U</Text>
                </Box>
                <Text
                mt='5px'
                fontSize='20px'
                fontWeight={'bolder'}
                >User</Text>
                <Spacer></Spacer>
            </Flex>
            </Stack>
        </Stack>
        </>
    )
}