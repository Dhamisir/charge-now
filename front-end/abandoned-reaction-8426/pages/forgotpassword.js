import { BiRightArrowAlt } from "react-icons/bi";
import { GiEarthAmerica, GiMailShirt } from "react-icons/gi";
import style from "../styles/Login.module.css";
import React from "react";
import { useRouter } from "next/Router";
import {
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Button,
  VStack,
  Input,
  FormLabel,
  Flex,
  useToast,
  AlertIcon,
  Alert
} from "@chakra-ui/react";

import Link from "next/link";
import axios from "axios";

export default function forgotpassword() {
  const toast = useToast();
  const [emaildetails, setemaildetails] = React.useState({})
  const router=useRouter();
  const [showinput, setshowinput] =React.useState(true)
  const [otpdetails, setotpdetails] = React.useState({})
const [isVerified, setisAuth] = React.useState(false)

  //  For handling gmail input box 
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
setemaildetails({
  ...emaildetails,
  [name]:value
})
};
// For handling otp input boxes 
const handleotp=(e)=>{
  const {name,value}= e.target;
  setotpdetails({
    ...otpdetails,
    [name]:value
  })
  
    }

    // For otp verification submit button 
  const handleotpchange=async()=>{
    if (!otpdetails.otp || !otpdetails.newPassword) {
      toast({
        title: "All fields are mandatory",
        description: "Please fill all the details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } 
  try {
    const res= await axios.post('http://localhost:8080/mailer/verifyOtp',otpdetails)
    const data=await res.data
    setisAuth(true)
  } catch (error) {
    console.log(error.message)
  }
}

  // for sending otp on email
  const handlepass =async () => {
    if (!emaildetails.email) {
      toast({
        title: "All fields are mandatory",
        description: "Please fill all the details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } 
    try {
      const res=await axios.post('http://localhost:8080/mailer/sendotp',emaildetails)
      const data=await res.data
      setshowinput(false)
    } catch (error) {
      console.log(error)
    }
   
  
  };
  if(isVerified){
    <Alert status='success'>
    <AlertIcon />
   Your Password Changed Successfully
  </Alert>
    
    router.push('/login')
    return
  }
  

  return (
    <Stack className={style.starting}>
      <VStack>
        <HStack margin={"auto"} justifyContent={"space-between"} width={"90%"}>
          <Stack>
            <Image
              src="https://d2jxbtsa1l6d79.cloudfront.net/static/app-static-assets/core/core-2.3.2/images/brand/cn-logotype-black.svg"
              width={"50%"}
              height={"100%"}
            ></Image>
          </Stack>

          <Flex>
            <Text as="i" marginTop={"10px"}>
              Don't have an account?{" "}
            </Text>
            <Button backgroundColor={'none'}>
              <Link href="/signup">Sign up</Link>{" "}
              <BiRightArrowAlt
                fontSize={"25px"}
                marginTop={"40px"}
              ></BiRightArrowAlt>
            </Button>
          </Flex>
        </HStack>

        <SimpleGrid
          columns={[1, 1, 1, 2]}
          height={"450px"}
          w={"50%"}
          margin={"auto"}
          marginTop={"80px"}
          spacing={"20px"}
          backgroundColor={"white"}
        >
          <VStack
            w={"100%"}
            height={"100%"}
            display={{ base: "none", md: "none", lg: "block" }}
          >
            <Image
              src="https://webstatic.chargebee.com/assets/web/543/images/summer-release/summer-release-bg.svg"
              h={"100%"}
            ></Image>
          </VStack>
          {/* Form side  */}

          <VStack height={"100%"}>
            <Stack width={"90%"} spacing={1} marginTop={"60px"}>
              <FormLabel fontWeight={"13px"}>
                Your registered email address
              </FormLabel>
              <Input
                type="email"
                placeholder={"name@company.com"}
                onChange={handleChange}
                name="email"
              />
            </Stack>

            <Button
              colorScheme="facebook"
              onClick={handlepass}
              width="90%"
              fontWeight={"10px"}
            >
              Send Otp
            </Button>
            
           {/* for the otp verification purpose  */}
           
            <Stack width={"90%"} spacing={1} marginTop={"60px"} hidden={showinput}>
              <FormLabel fontWeight={"13px"}>
             OTP
              </FormLabel>
              <Input
                type="number"
                placeholder={"Enter Your Otp"}
                onChange={handleotp}
                name="otp"
              />
              <FormLabel fontWeight={"13px"}>
                New Password
              </FormLabel>
              <Input
                type="password"
                placeholder={"Enter your password"}
                onChange={handleotp}
                name="newPassword"
              />
            
            
            <Button
              colorScheme="facebook"
              onClick={handleotpchange}
              width="90%"
              fontWeight={"10px"}
            >
              Change Password 
            </Button>
            
            </Stack>









            <Text fontSize="sm">
              <Link href="/login">Back to login</Link>
            </Text>
          </VStack>
        </SimpleGrid>
        <Flex>
          <GiEarthAmerica color={"green"} fontSize={"20px"}></GiEarthAmerica>{" "}
          <Text>
            You are on our US data hosting centre.Switch to our EU or AU data
            hosting centre.
          </Text>
        </Flex>
      </VStack>
    </Stack>
  );
}
