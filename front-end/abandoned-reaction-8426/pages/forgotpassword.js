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
    
  } from "@chakra-ui/react";

  import Link from "next/link";
  import { GiEarthAmerica } from "react-icons/gi";
  import style from "../styles/Login.module.css";
import React from "react";
export default function forgotpassword() {

const handleChange=(e)=>{
const {name,value} = e.target;

}
const handlepass=()=>{
    console.log('first')
}


    return(
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
            <Button>
              <Link href="/signup">Sign up</Link>{" "}
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
            <FormLabel fontWeight={'13px'} >Your registered email address</FormLabel>
              <Input
                type="email"
                placeholder={"name@company.com"}
                onChange={handleChange}
                name="email"
              />

            </Stack>
         
              <Button colorScheme="facebook" onClick={handlepass} width='90%' fontWeight={'10px'}>
                Send reset link
              </Button>
             
             <Text fontSize='sm' ><Link href='/login'>Back to login</Link></Text>
           
           

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
)


}