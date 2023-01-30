import {Flex, Text, Box, Spacer} from '@chakra-ui/react'
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios' 
import {useSelector, useDispatch} from 'react-redux'
import {DelEmail} from '../Redux/Login/login.actions'
import { useToast } from '@chakra-ui/react';
let API = process.env.NEXT_PUBLIC_API_LINK;
export default function SingleMailDisplay({email}) {
    const toast = useToast()
    const {user} = useSelector(state=>state.login)
    const dispatch = useDispatch()

    const handleDelEmail = async ()=>{
        const res = await axios.post(`${API}/mailer/delServiceEmail`, {
            "email":user.email,
            "delEmail":email
        })
        let data = await res.data

        if(!data.error){
          localStorage.setItem('token', data.token)
            dispatch(DelEmail(data.serviceEmail))
            toast({
                position: 'bottom-left',
                render: () => (
                  <Box color='white' p={3} bg='green' borderRadius={'5px'}>
                    Email deleted successfully
                  </Box>
                ),
              })
        } else {
            toast({
                position: 'bottom-left',
                render: () => (
                  <Box color='white' p={3} bg='red' borderRadius={'5px'}>
                    Email delete failed
                  </Box>
                ),
              })
        }

    }

    return (
        <>
            <Flex
            backgroundColor={'#ffe26f'}
            width='fit-content'
            p='15px'
            borderRadius={'10px'}
            w='100%'
            fontFamily={'MAIN'}
            >
            <Box 
            backgroundColor='purple'
            borderRadius='50%'
            w='40px'
            h='40px'
            >
                <Text
                fontWeight='bold'
                color='white'
                textAlign='center'
                mt='4px'
                fontSize='20px'
                >{email[0].toUpperCase()}</Text>
            </Box>
            <Spacer></Spacer>
            <Text
            mt='5px'
            fontSize='18px'
            >{email}</Text>
            <Spacer></Spacer>
            <Box
            mt='5px'
            onClick={handleDelEmail}
            >
                <MdDeleteOutline size='30' />
            </Box>
            </Flex>
        </>
    )
}