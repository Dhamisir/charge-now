import { Stack, Text, Button, Box, Flex, Spacer } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import {useRouter} from 'next/Router'
import { HandleLogout } from "../Redux/Login/login.actions";

export default function DashboardSidebar() {
    const {user, isAuth} = useSelector(state=>state.login)
    const nav = useRouter()
    const dispatch = useDispatch()
    

    return (
        <>
        <Stack 
        borderRadius={'10px'}
        boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px;'
        height='100%'
        overflowY={'auto'}
        backgroundColor={'white'}
        w='20%'
        position='fixed'
        p='0.5%'
        pt='1%'
        pb='2%'
        >
          <Stack
          backgroundColor='#2C0069'
          borderRadius='10px'
          color='white'
          p='3%'
          >
          <Text fontSize="18px">{user.companyName}</Text>
          <Text fontSize="14px">{user.companyName}@chargenow.com</Text>
          <Button colorScheme="whatsapp" rightIcon={<ArrowForwardIcon />}>
            Select Plan
          </Button>
        </Stack>
        <Stack>
          <Button
            hidden={user.role == "admin" ? true : false}
            onClick={() => {
              nav.push("/dashboard/home");
            }}
          >
            Home
          </Button>
          <Button
            hidden={user.role == "admin" ? true : false}
            onClick={() => {
              nav.push("/dashboard/mailinglist");
            }}
          >
            Mailing List
          </Button>
          <Button
            onClick={() => {
              nav.push("/dashboard/Services");
            }}
          >
            Subscriptions
          </Button>
          <Button hidden={user.role == "admin" ? true : false}>Invoice</Button>
          <Button onClick={() => {
            nav.push("/dashboard/admin/alluser");
          }} hidden={user.role == "admin" ? false : true}>Users</Button>
          <Button onClick={() => {
            nav.push("/dashboard/admin/addplans");
          }} hidden={user.role == "admin" ? false : true}>
            Add Plans
          </Button>
        </Stack>
        <Spacer></Spacer>
        <Stack>
          <Flex pl="20px">
            <Box
              backgroundColor="purple"
              borderRadius="50%"
              w="40px"
              h="40px"
              mr="20px"
            >
              <Text fontWeight="bold" color="white" textAlign="center" mt="7px">
                {user.name[0]}
              </Text>
            </Box>
            <Text mt="5px" fontSize="20px" fontWeight={"bolder"}>
              {user.name}
            </Text>
            <Spacer></Spacer>
          </Flex>
        <Button leftIcon={<BiLogOut />}
        onClick={()=>{
            dispatch(HandleLogout())
            nav.push('/login')
          }}>Log Out</Button>
        </Stack>
        </Stack>
    </>
  );
}
