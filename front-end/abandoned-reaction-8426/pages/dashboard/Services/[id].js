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
import axios from "axios";
import { MdCheckCircle } from "react-icons/md";
import Link from "next/link";
export default function Details({ softwareData }) {
  console.log(softwareData);
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
            Still not sure what you need? Give us a call. We’re happy to help,
            even if you’re not a customer. Call us at 040-67607600 and we'll
            chat — or get back to you as soon as we can.
            <Flex>
              <Text pt="1rem" pb="5px">
                Email Usage
              </Text>
              <CircularProgress value={40} color="green.400">
                <CircularProgressLabel>40%</CircularProgressLabel>
              </CircularProgress>
            </Flex>
            <List spacing={3} pb="1rem">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              {/* You can also use custom icons from react-icons */}
            </List>
            <Button colorScheme="blue">CheckOut Page</Button>
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
              ChargeBee guides
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
  let data = await axios.get(
    `${API}/chargebee/software/getSingleSoftware/${id}`
  );
  return {
    props: {
      softwareData: data.data,
    }, // will be passed to the page component as props
  };
}
