// import styles from '../styles/Signup.module.css';
import React,{useState} from "react";
import style from "../styles/Signup.module.css";
import {useRouter} from 'next/router'
import {
  SimpleGrid,
  Button,
  Input,
  VStack,
  Image,
  Stack,
  FormControl,
  FormLabel,
  Checkbox,
  Text,
  HStack,
  useToast,
  Spinner,
  useFocusEffect
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
// import Link from 'next/link'
import { registerUser } from "../Redux/Register/register.actions";
export default function signup() {
  const { isAuth } = useSelector((store) => store.login);
  const { isLoading, isError, isRegistered, successMessage, errorMessage } = useSelector((store) => store.register);
  const dispatch = useDispatch();
  const toast = useToast();
  const router=useRouter();
const [registerCreds, setregisterCreds] = useState({})
  const handleChange = (e) => {
    const {name,value}=e.target;
  setregisterCreds({
    ...registerCreds,
    [name]:value,
  })
  };
  const handleClick = () => {
   if(
   !registerCreds.name ||
   !registerCreds.email ||
   !registerCreds.companyname ||
   !registerCreds.password 

   ){
    toast({
      title: "All fields are mandatory",
      description: "Please fill all the details",
      status: "error",
      duration: 4000,
      isClosable: true,
    })
   }else{
    toast({
      title: "Your account is created",
      description: "We've created your account for you.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    dispatch(registerUser(registerCreds))
   }
};
if(isRegistered){
  return router.push('/login')
}
if(isLoading){
  return <h1>....loading</h1>
}
else if(isError){
  return toast({
    title: "Wrong Credentials",
    description: "Incorrect Email or Password",
    status: "error",
    duration: 4000,
    isClosable: true,
  });
}

  return (
    <Stack>
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        border={"1px"}
        borderColor={"red"}
        height={"auto"}
      >
        <VStack
          width={"65%"}
          border={"1px"}
          className={style.main}
          height={"500px"}
          display={{ base: "none", md: "none", lg: "block" }}
        >
          <Stack background={"gray.500"} h={"43%"} width={"100%"}>
            <Image
              src={
                "https://webstatic.chargebee.com/assets/web/543/images/signup/customers/dailius-wilson-getaccept.png"
              }
              width={"50%"}
              height={"100%"}
              margin={"auto"}
            ></Image>
          </Stack>
          <Stack w={"100%"} height={"16%"}>
            <Text fontSize="3xl" color={"white"} textAlign={"center"}>
              Dailius Wilson
            </Text>
            <Text
              fontFamily={"Lato, sans-serif"}
              textAlign={"center"}
              color={"white"}
            >
              VP Sales & Growth
            </Text>
          </Stack>

          <Stack
            textAlign={"center"}
            className={style.downwala}
            w={"100%"}
            h={"80%"}
          >
            <Text
              noOfLines={6}
              color={"white"}
              fontSize="18px"
              as={"bold"}
              marginLeft={"70px"}
              marginRight={"70px"}
              marginTop={"30px"}
            >
              Chargebee is a fantastic solution that really meets the needs of
              any SaaS business. Our revenue grew 4x in 12 months, using
              Chargebee.
            </Text>

            <Text color={"orange"} fontWeight={"30px"} marginTop={"40px"}>
              BUILT FOR HYPER-GROWTH
            </Text>
          </Stack>
        </VStack>

        <VStack
          w={{ sm: "90%", md: "90%", lg: "85%" }}
          // w={"85%"}
          border={"2px"}
          borderColor={"blackAlpha"}
          spacing={"60px"}
        >
          <HStack spacing={"100%"} alignItems={"flex-start"}>
            <Image
              src="https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg"
              h={"40px"}
            ></Image>{" "}
            <Button>Login</Button>
          </HStack>

          <VStack
            w={"90%"}
            margin={"auto"}
            border={"1px"}
            borderColor={"gray.200"}
            borderRadius={"10px"}
          >
            <Text
              fontSize="lg"
              as="b"
              marginLeft={"-250px"}
              marginTop={"-15px"}
              background={"white"}
            >
              Create Your Sandbox Account
            </Text>
            <FormControl width={"90%"}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder={"Enter Your name"}
                name="name"
                onChange={handleChange}
              />

              <FormLabel>Work email</FormLabel>
              <Input
                type="email"
                placeholder={"(eg)john.m@company.com"}
                onChange={handleChange}
                name="email"
              />
              <FormLabel>Company Name</FormLabel>
              <Input
                type="text"
                placeholder={"Enter Your Company name"}
                onChange={handleChange}
                name="companyname"
              />

              <FormLabel>Password</FormLabel>
              <Input
                pr="4.5rem"
                type="password"
                placeholder="Enter password"
                onChange={handleChange}
                name="password"
              />

              <Checkbox marginTop={"10px"} noOfLines={1} fontSize={"10px"}>
                I want to be notified about the happenings* at the chargebee
              </Checkbox>
            </FormControl>

            <Button
              colorScheme={"blackAlpha"}
              size={"lg"}
              position={"relative"}
              right={"165px"}
              onClick={handleClick}
            >
               {" Complete Signup"}
               {isLoading && (
                <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
               )}
            </Button>

            <Text
              fontSize="xs"
              noOfLines={2}
              textAlign={"left"}
              marginLeft={10}
            >
              By clicking on Complete Signup, you agree to our Terms and you
              acknowledge having read our Privacy Notice
            </Text>
            <Text fontSize="11px" textAlign={"left"}>
              *This includes periodic newsletters, emails about usage tips,
              billing practices, and other communications. You can opt out
              anytime within the app.
            </Text>
            <Text fontSize="xs" textAlign={"left"}>
              Your Data hosting is in US
            </Text>
          </VStack>
          <Stack>
            <Image src="https://webstatic.chargebee.com/assets/web/543/images/signup/customers/chargebee-customers.svg"></Image>
          </Stack>
        </VStack>
      </SimpleGrid>
    </Stack>
  );
}
