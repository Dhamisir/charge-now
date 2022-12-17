import {MdOutlineGif} from 'react-icons/md'
import {AiOutlinePaperClip} from 'react-icons/ai'
import {SlSettings} from 'react-icons/sl'
// import {BsFillLightbulbFill} from 'react-icons/bs'
import style from '../styles/Login.module.css'
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
    Image
} from '@chakra-ui/react'



export default function ChatSystem(){
    return(
<Stack position={'fixed'} bottom={'30px'} right={'40px'}>

<Popover placement='top-start' >
  <PopoverTrigger>
   
    <Image boxSize='70px'  src="https://user-images.githubusercontent.com/96005514/207302177-50735bbb-84cc-4e33-9d53-81460dfc4258.png"></Image>
   
   
    
   
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader backgroundColor={"blue.500"} color={'white'} fontWeight='lg'>Chat with Chargbee</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody width={'200px'} height={"400px"}>
     
    
<Text>
    Hey there! Would you like to chat with our billing consultant
</Text>
        <Flex>
        <Button colorScheme='teal' variant='outline'>
  Yes,Please
  </Button>
  <Button colorScheme='teal' variant='outline'>
   Not yet
  </Button>

        </Flex>
      
<Text>Sure,I'm gonna grab one of our experts for you </Text>

<Flex width={'300px'} border={'1px'} height={'40px'}>
<Input placeholder={'Reply to Chat with Chargbee'} justifySelf={'end'}></Input>
<MdOutlineGif className={style.fontshai}></MdOutlineGif>

<AiOutlinePaperClip className={style.fontshai}></AiOutlinePaperClip>
<SlSettings className={style.fontshai}></SlSettings>
</Flex>



    </PopoverBody>
  </PopoverContent>
</Popover>
</Stack>
    )
}
