import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
} from '@chakra-ui/react';

import Link from 'next/link';
import Head from 'next/head'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <>
            <Head>
                <title>
                    Charge Now
                </title>
            </Head>
            <Box  fontFamily={'MAIN'} >
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    color={useColorModeValue('black.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    <Flex alignItems="center" flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Box w={{ base: "30%", md: "5%" }}>
                            <Link href="/">
                                <Image src='https://user-images.githubusercontent.com/96005514/207302177-50735bbb-84cc-4e33-9d53-81460dfc4258.png' alt='Charge Now' />
                            </Link>
                        </Box>
                        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                            <DesktopNav />
                        </Flex>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        <Button
                            as={'a'}
                            fontSize={'sm'}
                            fontWeight={400}
                            variant={'link'}
                            href={'/login'}>
                            Login
                        </Button>
                        <Button
                            as={"a"}
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={600}
                            p="0px 25px"
                            color={'white'}
                            bg={'#FF7846'}
                            href={'/signup'}
                            _hover={{
                                bg: '#FF7845',
                            }}>
                            Sign Up
                        </Button>
                    </Stack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse>
            </Box>
        </>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: '#FF7846' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'#FF7846'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>

    );
};



const NAV_ITEMS = [
    {
        label: 'Product',
        children: [
            {
                label: 'Subscription Management',
                subLabel: 'Create & Manage Plans Entitlements',
                href: '/login',
            },
            {
                label: 'Billing Automation',
                subLabel: 'Usage Based Billing',
                href: '/login',
            },
            {
                label: 'Recurring Payments',
                subLabel: 'Multiple Payment Methods',
                href: '/login',
            },
            {
                label: 'Accounting & Taxes',
                subLabel: 'Revenue Recognition',
                href: '/login',
            },
            {
                label: 'Customer Retention',
                subLabel: 'Tackle churn',
                href: '/login',
            },
        ],
    },
    {
        label: 'Pricing',
        href: '/pricing'
    },
    {
        label: 'Solutions',
        children: [
            {
                label: 'By Role',
                subLabel: 'Finance',
                href: '/login',
            },
            {
                label: 'By Industry',
                subLabel: 'B2B SaaS',
                href: '/login',
            },
            {
                label: 'By Strategy',
                subLabel: 'Roll Out New Pricing',
                href: '/login',
            },
            {
                label: 'By Business Size',
                subLabel: 'Startup',
                href: '/login',
            },
        ],
    },
    {
        label: 'Customers',
        href: '/contact',
    },
    {
        label: 'Resources',
        children: [
            {
                label: 'Chargebee Blog',
                subLabel: 'Read our ever-growing stories on SaaS, and get all the growth insights you need.',
                href: '/login',
            },
            {
                label: 'Chargebee Docs',
                subLabel: 'Learn to unlock all revenue secrets to secure hyper-growth for your business.              Access free certifications, courses, and expert masterclasses',
                href: '/login',
            },
            {
                label: 'Industry Reports',
                subLabel: 'Learn about the possibilities that change brings about and how Chargebee recognizes &celebrates change-makers by being an enabler of change.',
                href: '/login',
            },
            {
                label: 'Webiners',
                subLabel: 'A quick overview of Chargebee to help you understand and implement it.',
                href: '/login',
            },
        ],
    },
];
