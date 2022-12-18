import {IoMdSend} from 'react-icons/io'
import {AiOutlinePaperClip} from 'react-icons/ai'
import {SlSettings} from 'react-icons/sl'
import style from '../styles/Login.module.css'
import Clock from 'react-live-clock'
import React from 'react'
import Link from 'next/link';
import {
    Stack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverBody,
    PopoverHeader,
    PopoverCloseButton,
    Button,
    Text,
    Flex,
    Input,
    Image,
    VStack
} from '@chakra-ui/react'



export default function ChatSystem(){
    const [show, setshow] = React.useState(true)
    const [secondshow, setsecondshow] = React.useState(true)
 
  



    const handleyesoption=()=>{
      setshow(false)
    }
    const handlenooption=()=>{
   setsecondshow(false)
    }
    return(
<Stack position={'fixed'} bottom={'30px'} right={'40px'}>

<Popover placement='top-start' >
  <PopoverTrigger>
   
    <Image boxSize='70px'  src="https://th.bing.com/th/id/OIP.iqNsbMZD0K7PR6VpUJhNhgHaHa?w=152&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"></Image>
   
   
    
   
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader backgroundColor={"blue.500"} color={'white'} fontWeight='lg'>Chat with Chargbee</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody width={'200px'} height={"400px"}>
     
    
<Stack width={'280px'} >
{/* <Clock format={'h:mm:ssa'} style={{fontSize: '1.5em'}} ticking={true} /> */}
  <Text  fontSize={'md'}>
    Hey there! Would you like to Use our mailing service?
</Text>
</Stack>

        <Flex marginTop={'10px'} justifyItems={'flex-end'}  width={'200px'}
        marginLeft={'100px'}
        >
        <Button colorScheme='teal' variant='outline' onClick={handleyesoption} >
  Yes,Please
  </Button>
  <Button colorScheme='teal' variant='outline' onClick={handlenooption}>
   Not yet
  </Button>

        </Flex>
      
<Text hidden={show} marginTop={'10px'}> Do you have an account with us </Text>

<Flex hidden={show} marginTop={'10px'} justifyItems={'flex-end'}  width={'200px'}
        marginLeft={'140px'}
        >
        <Button colorScheme='teal' variant='outline' width={'100px'} >

        <Link href='/login'>Yes</Link>
  
  </Button>
  <Button colorScheme='teal' variant='outline'>
  <Link href='/signup'>No</Link>
   
  </Button>
  </Flex>


<Stack width={'280px'} >
  <Text hidden={secondshow}  marginTop={'10px'}>That's cool,let's see if i can help you. </Text>
<Text hidden={secondshow} marginTop={'10px'}>What's your average revenue per user or ARPU </Text>
</Stack>


<VStack hidden={secondshow} marginTop={'10px'} justifyItems={'flex-end'}  width={'200px'}
        marginLeft={'100px'}>
  <Button colorScheme='teal' variant='outline'>Over USD 500 MRR</Button>
  <Button colorScheme='teal' variant='outline'>Under USD 500 MRR</Button>
  <Button colorScheme='teal' variant='outline'>I'm not sure</Button>
</VStack>

<Flex width={'300px'}  height={'40px'} position={'absolute'} bottom={'0px'} hidden={show}>
<Input placeholder={'Reply to Chat with Chargbee'} alignSelf={'end'}
 
></Input>
<Button size='xs' backgroundColor={'white'} marginTop={'5px'}>
  <IoMdSend className={style.fontshai}></IoMdSend>
</Button>


<AiOutlinePaperClip className={style.fontshai}></AiOutlinePaperClip>
<SlSettings className={style.fontshai}></SlSettings>
</Flex>



    </PopoverBody>
  </PopoverContent>
</Popover>
</Stack>
    )
}

