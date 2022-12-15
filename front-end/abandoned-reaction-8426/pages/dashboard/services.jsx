import {
  Box,
  Badge,
  SimpleGrid,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Services() {
  const pE = [
    {
      id: "1",
      title: "Professional Email",
      url: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/63f02b10-1cc4-424b-ac60-508f89ed9357/feat-email-cat-professional-email-row.jpg",
      ialt: "hb",
      price: "$20.00",
      plan: "new",
      servicePlan: "12th December",
      emailCount: "100",
    },
    {
      id: "2",
      title: "Business Email",
      url: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/bc2f1d96-a284-42a3-99e6-320f95e1f92d/feat-email-cat-email-office.jpg",
      ialt: "hb",
      price: "$15.00",
      plan: "new",
      servicePlan: "12th December",
      emailCount: "100",
    },
    {
      id: "3",
      title: "Student Email",
      url: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/63f02b10-1cc4-424b-ac60-508f89ed9357/feat-email-cat-professional-email-row.jpg",
      ialt: "hb",
      price: "$58.00",
      plan: "old",
      servicePlan: "12th December",
      emailCount: "100",
    },
    {
      id: "4",
      title: "Corporate Email",
      url: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/bc2f1d96-a284-42a3-99e6-320f95e1f92d/feat-email-cat-email-office.jpg",
      ialt: "hb",
      price: "$25.00",
      plan: "new",
      servicePlan: "12th December",
      emailCount: "100",
    },
    {
      id: "5",
      title: "Professional Email",
      url: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/63f02b10-1cc4-424b-ac60-508f89ed9357/feat-email-cat-professional-email-row.jpg",
      ialt: "hb",
      price: "$38.00",
      plan: "old",
      servicePlan: "12th December",
      emailCount: "100",
    },
    {
      id: "6",
      title: "Professional Email",
      url: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/bc2f1d96-a284-42a3-99e6-320f95e1f92d/feat-email-cat-email-office.jpg",
      ialt: "hb",
      price: "$35.00",
      plan: "old",
      servicePlan: "12th December",
      emailCount: "100",
    },
  ];

  return (
    <div>
      <Box bgColor="gray.200" marginLeft="20.5%">
        <Box
          backgroundImage="url('https://www.elegantthemes.com/blog/wp-content/uploads/2021/02/email-marketing-services.png')"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          width="3.5xl"
          // marginLeft="20.5%"
          height="500px"
          mt={55}
          display="flex"
          alignItems="center"
        >
          <Container maxW="xl" marginLeft="2%">
            <Text fontSize="1.1rem" fontWeight="bold">
              Email & Office
            </Text>
            <p className="getThe">
              Get the tools you need to grow your business.
            </p>
            <Text fontSize="1rem" pt="1.5rem">
              1. Send and receive emails from your domain with Professional
              Email
            </Text>
            <Text fontSize="1rem" pt="1rem">
              2. Accomplish more every day with Microsoft 365.
            </Text>
            <Text fontSize="1rem" pt="1rem">
              3. Save by purchasing both together.
            </Text>
          </Container>
        </Box>
        <Box width="3.5xl" textAlign="center" mt="10rem">
          <p className="chooseThe">
            Choose the best Professional Email plan for your business:
          </p>
        </Box>
        <SimpleGrid
          templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr 1fr"]}
          gap={4}
          p={2}
          width="80%"
          margin="auto"
          mt={5}
          mb={5}
        >
          {pE.map(
            ({
              id,
              title,
              url,
              ialt,
              plan,
              price,
              servicePlan,
              emailCount,
            }) => (
              <Box
                key={id}
                maxW="sm"
                height="auto"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bgColor="blue.200"
                border="2px Solid black"
                m="auto"
              >
                <Link to="/service-details">
                  <img src={url} alt={ialt} />
                </Link>
                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      {plan} Plan
                    </Badge>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {title}
                  </Box>
                  <Box>
                    {price}
                    <Box as="span" color="gray.600" fontSize="sm">
                      / month
                    </Box>
                  </Box>
                  {/* <Box lineHeight="1rem">Plan Created: {servicePlan}</Box> */}
                </Box>
              </Box>
            )
          )}
        </SimpleGrid>
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
