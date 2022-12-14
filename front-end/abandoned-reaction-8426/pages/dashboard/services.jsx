import { Box, Badge, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Services() {
  const pE = [
    {
      id: "1",
      title: "Professional Email",
      url: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/63f02b10-1cc4-424b-ac60-508f89ed9357/feat-email-cat-professional-email-row.jpg",
      ialt: "hb",
      price: "$20.00",
      plan: "new",
      reviewCount: 48,
    },
    {
      id: "2",
      title: "Business Email",
      url: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/bc2f1d96-a284-42a3-99e6-320f95e1f92d/feat-email-cat-email-office.jpg",
      ialt: "hb",
      price: "$15.00",
      plan: "new",
      reviewCount: 34,
    },
    {
      id: "3",
      title: "Student Email",
      url: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/63f02b10-1cc4-424b-ac60-508f89ed9357/feat-email-cat-professional-email-row.jpg",
      ialt: "hb",
      price: "$58.00",
      plan: "old",
      reviewCount: 126,
    },
    {
      id: "4",
      title: "Corporate Email",
      url: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/bc2f1d96-a284-42a3-99e6-320f95e1f92d/feat-email-cat-email-office.jpg",
      ialt: "hb",
      price: "$25.00",
      plan: "new",
      reviewCount: 20,
    },
    {
      id: "5",
      title: "Professional Email",
      url: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/63f02b10-1cc4-424b-ac60-508f89ed9357/feat-email-cat-professional-email-row.jpg",
      ialt: "hb",
      price: "$38.00",
      plan: "old",
      reviewCount: 300,
    },
    {
      id: "6",
      title: "Professional Email",
      url: "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/bc2f1d96-a284-42a3-99e6-320f95e1f92d/feat-email-cat-email-office.jpg",
      ialt: "hb",
      price: "$35.00",
      plan: "old",
      reviewCount: 235,
    },
  ];

  return (
    <SimpleGrid
      templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr 1fr"]}
      gap={4}
      p={2}
    >
      {pE.map(({ id, title, url, ialt, plan, price, reviewCount }) => (
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

            <Box display="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}
