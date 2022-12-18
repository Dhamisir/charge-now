import {
  Box,
  Badge,
  SimpleGrid,
  Text,
  Container,
  Button,
  Flex,
  Stack,
  Heading,
  Spinner
} from "@chakra-ui/react";
import style from "../../../styles/services.module.css";
import { useRouter } from "next/Router";
import { useSelector, useDispatch } from "react-redux";
import { serviceAction } from "../../../Redux/Services/services.actions";
import { useEffect } from "react";
import DashboardSidebar from "../../../components/DashboardSidebar";
import { HandleTokenLogin } from "../../../Redux/Login/login.actions";
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
];

export default function Services() {
  const dispatch = useDispatch();
  const { isLoading, isError, serviceData } = useSelector(
    (store) => store.service
  );
  const {user, isAuth} = useSelector(state=>state.login)
  const nav = useRouter()
  const getService = () => {
    dispatch(serviceAction());
  };

  useEffect(() => {
    getService();
  }, []);

  useEffect(()=>{
    let token = localStorage.getItem('token')
    if(!isAuth && token==null){
        nav.push('/login')
        return 
    }
    if(token!=null){
      dispatch(HandleTokenLogin())
      return
  }
  }, [])

  // console.log(serviceData);
  if(isAuth){
    return (
      <div>
        <Flex>
          <DashboardSidebar />
          <Stack w="80%" h="621px" spacing="30px" marginLeft="20.5%">
            <Stack
              p="3%"
              pl="5%"
              w="100%"
              backgroundColor={"white"}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            >
              <Heading>Welcome, User</Heading>
              <Text>View/Update your mailing list here</Text>
            </Stack>
            <Box bgColor="gray.200">
              <Box
                backgroundImage="url('https://www.elegantthemes.com/blog/wp-content/uploads/2021/02/email-marketing-services.png')"
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                width="3.5xl"
                // marginLeft="20.5%"
                height="500px"
                // mt={55}
                display="flex"
                alignItems="center"
              >
                <Container maxW="xl" marginLeft="2%">
                  <Text fontSize="1.1rem" fontWeight="bold">
                    Email & Office
                  </Text>
                  <p className={style.getThe}>
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
                <p className={style.chooseThe}>
                  Choose the best Professional Email plan for your business:
                </p>
              </Box>
              <SimpleGrid
                templateColumns={[
                  "1fr",
                  "1fr 1fr",
                  "1fr 1fr 1fr",
                  "1fr 1fr 1fr 1fr",
                ]}
                gap={4}
                p={2}
                width="80%"
                margin="auto"
                mt={5}
                mb={5}
              >
                {serviceData.map(
                  ({
                    _id,
                    current_term_end,
                    current_term_start,
                    emailCount,
                    object,
                  }) => (
                    <Box
                      key={_id}
                      maxW="sm"
                      height="auto"
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      bgColor="blue.200"
                      border="2px Solid black"
                      m="auto"
                    >
                      {/* <Link href="/dashboard/Services/service-details">
                      <img src={url} alt={ialt} />
                    </Link> */}
                      <Box p="6">
                        <Box display="flex" alignItems="baseline">
                          <Badge borderRadius="full" px="2" colorScheme="teal">
                            {object} Plan
                          </Badge>
                        </Box>
  
                        <Box
                          mt="1"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          noOfLines={1}
                        >
                          {emailCount}
                        </Box>
                        <Box
                          mt="1"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          noOfLines={1}
                        >
                          {current_term_start}
                        </Box>
                        <Box>
                          {current_term_end}
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
                  <p className={style.we}>We love to help.</p>
                  <p className={style.we2}>Seriously.</p>
                  <Text
                    fontSize="1rem"
                    pt="1.5rem"
                    lineHeight="1.5rem"
                    fontWeight="semibold"
                    pb="1rem"
                  >
                    "Still not sure what you need? Give us a call. We’re happy to
                    help, even if you’re not a customer. Call us at 040-67607600
                    and we'll chat — or get back to you as soon as we can.
                  </Text>
                  <Button colorScheme="telegram">Get Help</Button>
                </Container>
              </Box>
            </Box>
          </Stack>
        </Flex>
      </div>
    );
  } else {
    return (
      <>
          <Stack
          w='fit-content'
          h='fit-content'
          alignSelf='center'
          justifySelf='center'
          >
          <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
          />

          </Stack>
      </> 
  )
  }
}
