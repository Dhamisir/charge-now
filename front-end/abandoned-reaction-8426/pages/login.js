import { BiRightArrowAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { GiEarthAmerica } from "react-icons/gi";
import style from "../styles/Login.module.css";
import React, { useEffect } from "react";
import {
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Button,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { HandleLogin } from "../Redux/Login/login.actions";
import ChatSystem from "../components/ChatSystem"
import Head from 'next/head'

export default function login() {
  const { isAuth, isLoading, isError, user } = useSelector((store) => store.login);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [loginCreds, setLoginCreds] = React.useState({});
  const dispatch = useDispatch();
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handlelogin = () => {
    if (!loginCreds.email || !loginCreds.password) {
      toast({
        title: "All fields are mandatory",
        description: "Please fill all the details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      dispatch(HandleLogin(loginCreds));
    }
  };

  useEffect(() => {
    if (isError) {
      toast({
        title: "Wrong Credentials",
        description: "Incorrect Email or Password",
        status: "error",
        duration: 4000,
        isClosable: true,
      })
    } else if (isAuth) {
      toast({
        title: "Logged in successfully",
        description: "Go and get exciting offers...",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      if (user.role == 'user') router.push("/dashboard/home");
      else if (user.role == 'admin') router.push("/dashboard/Services")
      return;
    }
  }, [isAuth, isError])

  if (isLoading) {
    return (<Image src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif" width={'100%'} marginTop={'-30px'}></Image>)
  }

  return (
    <>
      <Head>
        <title>
          Charge Now / Login
        </title>
      </Head>
      <Stack className={style.starting}>
        <VStack>
          <HStack margin={"auto"} justifyContent={"space-between"} width={"90%"}>
            <Stack>
              <Link href="/">
                <Image
                  src="https://user-images.githubusercontent.com/101573792/208240778-3c6c67f7-d48e-47e8-bafb-16d8795d71c3.png"
                  width={"18%"}
                  height={"24%"}
                ></Image>
              </Link>
            </Stack>

            <Flex>
              <Text as="i" marginTop={"10px"}>Don't have an account? </Text>
              <Button backgroundColor={'none'}>
                <Link href="/signup">Sign up</Link>{" "}
                <BiRightArrowAlt fontSize={"25px"} marginTop={'40px'}></BiRightArrowAlt>
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
                src="https://user-images.githubusercontent.com/101573792/208240374-b99a438f-bbe3-4b75-b9e0-700cd2b4a5f2.jpeg"
                h={"90%"}
                marginTop={"10px"}
              ></Image>
            </VStack>
            {/* Form side  */}

            <VStack height={"100%"}>
              <Text
                className={style.leftkro}
                marginTop={"40px"}
                textAlign={"left"}
                as='b'
              >
                Sign in to Chargbee
              </Text>
              <Stack width={"90%"} spacing={3} marginTop={"40px"}>
                <Input
                  type="email"
                  placeholder={"name@company.com"}
                  onChange={handleChange}
                  name="email"
                />

                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleClick}
                      backgroundColor={"white"}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Stack>
              <Flex width={'85%'} justifyContent={'space-between'} marginTop="29px">
                <Button colorScheme="orange" onClick={handlelogin} width='150px'>
                  Sign in
                </Button>
                <Text fontSize='sm' marginTop={'10px'}>
                  <Link href='/forgotpassword'>Forgot password?</Link>
                </Text>
              </Flex>
              <Text className={style.nchekro}>or</Text>

              <Flex border={'1px'} borderColor={'blue'}


              >
                <FcGoogle className={style.googlefont} ></FcGoogle>
                <Button colorScheme='twitter' borderRadius={'none'}>Sign in With Google</Button>
              </Flex>
            </VStack>
          </SimpleGrid>
          <Flex>
            <GiEarthAmerica color={"green"} fontSize={'20px'}></GiEarthAmerica>{" "}
            <Text>
              You are on our US data hosting centre.Switch to our EU or AU data
              hosting centre.
            </Text>
          </Flex>
        </VStack>


        <ChatSystem></ChatSystem>



      </Stack>

    </>
  );
}
