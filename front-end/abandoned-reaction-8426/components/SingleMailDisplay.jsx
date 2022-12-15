import {Flex, Text, Box} from '@chakra-ui/react'
import { MdDeleteOutline } from "react-icons/md";

export default function SingleMailDisplay({email}) {
    return (
        <>
            <Flex
            backgroundColor={'#ffe26f'}
            width='fit-content'
            p='15px'
            borderRadius={'10px'}
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
                mt='4px'
                fontSize='20px'
                >{email[0].toUpperCase()}</Text>
            </Box>
            <Text
            mt='5px'
            fontSize='18px'
            >{email}</Text>
            
            <Box
            mt='5px'
            ml='15px'
            >
                <MdDeleteOutline size='30' />
            </Box>
            </Flex>
        </>
    )
}