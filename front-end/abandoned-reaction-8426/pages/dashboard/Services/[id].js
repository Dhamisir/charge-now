import {
  Box,
  Image,
  Flex,
  Text,
  Container,
  Button,
  List,
  ListItem,
  ListIcon,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { singleAction } from "../../../Redux/Services/services.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/Router";

export default function Details({ id }) {
  const dispatch = useDispatch();
  const nav = useRouter();

  const { singleData } = useSelector((store) => store.service);

  const getService = () => {
    dispatch(singleAction(id));
  };

  useEffect(() => {
    getService();
  }, []);

  return (
    <div>
      <Box bgColor="gray.200" marginLeft="20.5%">
        <Flex gap="1rem">
          <Image
            src="https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/63f02b10-1cc4-424b-ac60-508f89ed9357/feat-email-cat-professional-email-row.jpg"
            alt="Dan Abramov"
          ></Image>
          <Text>
            <Text fontSize="2rem">Service Description</Text>
            <Flex>
              <Text fontSize={"1.2rem"}>Service Category: </Text>
              <Text fontSize={"1.4rem"} color="blue.500">
                {" "}
                {singleData.object}
              </Text>
            </Flex>
            <Flex>
              <Text pt="1rem" pb="5px">
                Email Available
              </Text>
              <CircularProgress value={100} color="blue.500">
                <CircularProgressLabel>100%</CircularProgressLabel>
              </CircularProgress>
            </Flex>
            <List spacing={3} pb="1rem">
              <ListItem>
                <Flex>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <Flex>
                    <Text>Billing Period:</Text>
                    <Text color="blue.500">
                      {singleData.billing_period} month
                    </Text>
                  </Flex>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <Flex>
                    <Text>Email Count:</Text>
                    <Text color="blue.500">{singleData.emailCount}</Text>
                  </Flex>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems={"center"}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <Flex>
                    <Text>Service Amount: </Text>
                    <Text color={"blue.500"}>${singleData.serviceAmount}</Text>
                  </Flex>
                </Flex>
              </ListItem>
            </List>
            <Button
              colorScheme="blue"
              onClick={() => {
                nav.push("/dashboard/Services/checkout");
              }}
            >
              CheckOut Page
            </Button>
          </Text>
        </Flex>
        <Box
          backgroundImage="url('https://dazeinfo.com/wp-content/uploads/2020/09/IT-service-help-desk.png')"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          width="3.5xl"
          height="400px"
          mt="5rem"
          display="flex"
          alignItems="center"
          mb="1rem"
        >
          <Container maxW="xl" marginLeft="2%">
            <Text fontSize="1.1rem" fontWeight="bold">
              ChargeNow guides
            </Text>
            <p className="we">We love to help.</p>
            <p className="we2">Seriously.</p>
            <Text
              fontSize="1rem"
              pt="1.5rem"
              lineHeight="1.5rem"
              fontWeight="semibold"
              pb="1rem"
            >
              Still not sure what you need? Give us a call. We’re happy to help,
              even if you’re not a customer. Call us at 040-67607600 and we'll
              chat — or get back to you as soon as we can.
            </Text>
            <Button colorScheme="telegram">Get Help</Button>
          </Container>
        </Box>
      </Box>
    </div>
  );
}

const API = process.env.NEXT_PUBLIC_API_LINK;

export async function getServerSideProps(context) {
  const { id } = context.query;
  return {
    props: {
      id,
    },
  };
}
