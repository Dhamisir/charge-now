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
  useToast
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { GiEarthAmerica } from "react-icons/gi";

import style from "../styles/Login.module.css";
import React from "react";
import { useSelector } from "react-redux";

export default function login() {
  const {isAuth,isLoading,isError}=useSelector((store)=>store.login)
    const [show, setShow] = React.useState(false);
    const toast = useToast();
  const handleClick = () => setShow(!show);
  const [loginCreds, setLoginCreds] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handlelogin=()=>{

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

          <Stack>
            <Text as="i">Don't have an account? </Text>
            <Button>
              <Link href="/signup">Sign up</Link>{" "}
            </Button>
          </Stack>
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
            border={"1px"}
            borderColor={"black"}
            display={{ base: "none", md: "none", lg: "block" }}
          >
            <Image
              src="https://webstatic.chargebee.com/assets/web/543/images/summer-release/summer-release-bg.svg"
              h={"100%"}
            ></Image>
          </VStack>
          {/* Form side  */}

          <VStack height={"100%"} border={"1px"} borderColor={"red"}>
            <Text
              className={style.leftkro}
              marginTop={"10px"}
              textAlign={"left"}
            >
              Sign in to Chargbee
            </Text>
            <Stack width={"90%"} spacing={3} marginTop={"20px"}>
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
                  name='password'
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
            <Flex>
              <Button colorScheme="orange">Sign in</Button>
              <Text>Forgot password?</Text>
            </Flex>
            <Text>or</Text>

            <Flex>
              <FcGoogle></FcGoogle>
              <Button onClick={handlelogin}>Sign in With Google</Button>
            </Flex>
          </VStack>
        </SimpleGrid>
        <Flex>
          <GiEarthAmerica color={"green"}></GiEarthAmerica>{" "}
          <Text>
            You are on our US data hosting centre.Switch to our EU or AU data
            hosting centre.
          </Text>
        </Flex>
      </VStack>
    </Stack>
  );
}
