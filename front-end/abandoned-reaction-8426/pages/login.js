import { BiRightArrowAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { GiEarthAmerica } from "react-icons/gi";
import style from "../styles/Login.module.css";
import React from "react";
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


export default function login() {
  const { isAuth, isLoading, isError } = useSelector((store) => store.login);
  const [show, setShow] = React.useState(false);
  const toast = useToast();
  const handleClick = () => setShow(!show);
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
  if (isLoading) {
    return (<Image src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif" width={'100%'} marginTop={'-30px'}></Image>)
  } else if (isError) {
    toast({
      title: "Wrong Credentials",
      description: "Incorrect Email or Password",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  }

  if (isAuth) {
    toast({
      title: "Logged in successfully",
      description: "Go and get exciting offers...",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    router.push("/dashboard/home");
    return;
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
              src="https://webstatic.chargebee.com/assets/web/543/images/summer-release/summer-release-bg.svg"
              h={"100%"}
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
    </Stack>
  );
}
