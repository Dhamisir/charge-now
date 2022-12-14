import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Image,
} from '@chakra-ui/react';

const Logo = () => {
    return (
        <Box w={{ base: "15%", md: "5%" }}>
            <Link href="/">
                <Image src='https://user-images.githubusercontent.com/96005514/207302177-50735bbb-84cc-4e33-9d53-81460dfc4258.png' alt='Charge Now' />
            </Link>
        </Box>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} textAlign="center" spacing={8}>
                    <Stack>
                        <ListHeader>Product</ListHeader>
                        <Link href={'#'}>Subscription Management</Link>
                        <Link href={'#'}>Billing Automation</Link>
                        <Link href={'#'}>Recurring Payments</Link>
                        <Link href={'#'}>Accounting & Taxes</Link>
                        <Link href={'#'}>Customer Retention</Link>
                    </Stack>
                    <Stack>
                        <ListHeader>Company</ListHeader>
                        <Link href={'#'}>About Us</Link>
                        <Link href={'#'}>Press</Link>
                        <Link href={'#'}>Careers</Link>
                        <Link href={'#'}>Contact Us</Link>
                        <Link href={'#'}>Partners</Link>
                    </Stack>
                    <Stack>
                        <ListHeader>Solutions</ListHeader>
                        <Link href={'#'}>By Role</Link>
                        <Link href={'#'}>By Industry</Link>
                        <Link href={'#'}>By Strategy</Link>
                        <Link href={'#'}>By Business Size</Link>
                    </Stack>
                    <Stack>
                        <ListHeader>Follow Us</ListHeader>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        ml: 8,
                    }}>
                    <Logo />
                </Flex>
                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    © 2022 Chargee Now. All rights reserved
                </Text>
            </Box>
        </Box >
    );
}