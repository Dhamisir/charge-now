import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiRightArrowAlt } from "react-icons/bi";
import React from "react";
import style from "../styles/Login.module.css";
import {
  Button,
  Center,
  Flex,
  Stack,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure
} from "@chakra-ui/react";

export default function contact() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
  
    return (
    <Stack className={style.mainpagehaicont}>
      <Navbar />
      <Center>
        <Flex
          width={"75%"}
          spacing={"10px"}
          marginTop={"60px"}
          flexDirection={{ lg: "row", base: "column", md: "column" }}
        >
          <VStack
            width={"47%"}
            height={"auto"}
            justifyContent={"start"}
            color={"white"}
            spacing={"20px"}
          >
            {/* THis V stack contains some leftside page text */}
            <Flex w={"100%"} justifyContent={"space-between"}>
              <Button
                backgroundColor={"#522EC4"}
                justifySelf={"start"}
                mt={"80px"}
                borderRadius={"50px"}
                h={"30px"}
              >
                Chargebee Contact Programs
              </Button>
            </Flex>

            <Text
              lineHeight={"70px"}
              fontFamily={"unset"}
              fontSize="70px"
              as="b"
            >
              Let's Work Together
            </Text>
            <Text fontSize={"17px"} color={"#fefefe"} fontWeight={"400"}>
              Becoming a Chargebee Customer enables access to the world of
              subscriptions, bringing increased value to merchants, merchant
              aggregators and marketplaces around the world.{" "}
            </Text>
          </VStack>

          <VStack
            width={"45%"}
            height={"auto"}
            backgroundColor={"white"}
            borderRadius={"5px"}
          >
            {/* THis vstack contains the form page */}
            <Text as="b" marginTop={"50px"}>
              Enter your details to connect with our Partnership Team
            </Text>
            <FormControl width={"85%"} spacing={10} marginTop={"40px"}>
              <FormLabel
                fontSize={"15px"}
                fontWeight={"10px"}
                marginTop={"20px"}
              >
                First name <span className={style.star}>*</span>
              </FormLabel>
              <Input
                type="text"
                border={"1px"}
                borderColor={"black"}
                borderRadius={"none"}
              />

              <FormLabel
                fontSize={"15px"}
                fontWeight={"10px"}
                marginTop={"10px"}
              >
                Last name <span className={style.star}>*</span>
              </FormLabel>
              <Input
                type="email"
                border={"1px"}
                borderColor={"black"}
                borderRadius={"none"}
              />
              <FormLabel
                fontSize={"15px"}
                fontWeight={"10px"}
                marginTop={"10px"}
              >
                Business email <span className={style.star}>*</span>
              </FormLabel>
              <Input
                type="text"
                placeholder="vadraforku@gufum.com"
                name="companyName"
                border={"1px"}
                borderColor={"black"}
                borderRadius={"none"}
              />

              <FormLabel
                fontSize={"15px"}
                fontWeight={"10px"}
                marginTop={"10px"}
              >
                Job title <span className={style.star}>*</span>
              </FormLabel>
              <Input
                border={"1px"}
                borderColor={"black"}
                borderRadius={"none"}
              />

              <FormLabel
                fontSize={"15px"}
                fontWeight={"10px"}
                marginTop={"10px"}
              >
                Company name <span className={style.star}>*</span>
              </FormLabel>
              <Input
                border={"1px"}
                borderColor={"black"}
                borderRadius={"none"}
              />

              <FormLabel
                fontSize={"15px"}
                fontWeight={"10px"}
                marginTop={"10px"}
              >
                Country/Region <span className={style.star}>*</span>
              </FormLabel>
              <Input
                border={"1px"}
                borderColor={"black"}
                borderRadius={"none"}
              />

              <FormLabel
                fontSize={"15px"}
                fontWeight={"10px"}
                marginTop={"10px"}
              >
                Phone number <span className={style.star}>*</span>
              </FormLabel>
              <Input
                border={"1px"}
                borderColor={"black"}
                borderRadius={"none"}
              />

              <FormLabel
                fontSize={"15px"}
                fontWeight={"10px"}
                marginTop={"10px"}
              >
                Number of employees <span className={style.star}>*</span>
              </FormLabel>
              <Input
                border={"1px"}
                borderColor={"black"}
                borderRadius={"none"}
              />
              {/* use select tag here  */}
              <FormLabel
                fontSize={"15px"}
                fontWeight={"10px"}
                marginTop={"10px"}
              >
                Have you worked with Chargbee in the past{" "}
                <span className={style.star}>*</span>
              </FormLabel>
              <Select
                placeholder="Please Select"
                border={"1px"}
                borderColor={"black"}
                borderRadius={"none"}
              >
                <option value="option1">Yes</option>
                <option value="option2">No</option>
              </Select>

              <FormLabel
                fontSize={"15px"}
                fontWeight={"10px"}
                marginTop={"10px"}
              >
                How do you envision working with Chargebee{" "}
                <span className={style.star}>*</span>
              </FormLabel>
              <Input
                border={"1px"}
                borderColor={"black"}
                borderRadius={"none"}
              />
              <FormLabel
                fontSize={"15px"}
                fontWeight={"10px"}
                marginTop={"10px"}
              >
                What type of organizations do you work with{" "}
                <span className={style.star}>*</span>
              </FormLabel>
              <Input
                border={"1px"}
                borderColor={"black"}
                borderRadius={"none"}
              />

              <FormLabel
                fontSize={"15px"}
                fontWeight={"10px"}
                marginTop={"10px"}
              >
                How many clients do you have
                <span className={style.star}>*</span>
              </FormLabel>
              <Input
                border={"1px"}
                borderColor={"black"}
                borderRadius={"none"}
              />
            </FormControl>
            <Flex width={"85%"} justifyContent={"space-between"}>
              <Button
                marginTop={"20px"}
                backgroundColor={"#4C00AA"}
                color="white"
                w={"160px"}
                onClick={onOpen}
              >
                Contact Us{" "}
                <BiRightArrowAlt
                  fontSize={"25px"}
                  marginTop={"40px"}
                ></BiRightArrowAlt>{" "}
              </Button>
            </Flex>

            <Text fontSize="xs" color={"gray"}>
              Once you fill out this information,our team will get back to you
              shortly
            </Text>
          </VStack>
        </Flex>
      </Center>

      <Footer />
   
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
             Contact 
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You will get call on your number
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
   
   
   
   
    </Stack>
  );
}
