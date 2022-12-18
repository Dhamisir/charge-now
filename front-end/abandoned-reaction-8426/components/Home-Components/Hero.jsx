import {
    Container,
    Stack,
    Flex,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    useColorModeValue,
    IconButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { useRef } from 'react';
import { useState } from 'react';
const sliderData = [
    {
        heading: "The subscription management platform that enabled Slidebean to slide into 30+ countries.",
        img: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png"
    },
    {
        heading: "The infrastructure that allows Rise Vision to ask “What Does This Make Possible?”",
        img: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/paul-kapsner.png"
    },
    {
        heading: "The revenue engine that powered MakeSpace to launch a B2B model overnight.",
        img: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/rahul-gandhi.png"
    },
    {
        heading: "The revenue toolkit that allowed Yousign to enter a new market that now drives 15% MRR.",
        img: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/antoine-louiset.png"
    },
    {
        heading: "The infrastructure that allows Rise Vision to ask “What Does This Make Possible?”",
        img: "https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/debbie-barrafato.png"
    },
]

export default function Hero() {
    let data = sliderData[0]
    // console.log(data)
    const [header, setHeader] = useState(data)
    let ref = useRef(0);
    return (
        <Container maxW={'7xl'} position="relative">
            {/* left icon */}
            <IconButton
                disabled={ref.current == 0}
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                transform={'translate(0%, -50%)'}
                zIndex={2}
                left="0"
                bottom="10"
                onClick={() => setHeader(sliderData[ref.current -= 1])}>
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* right icon */}
            <IconButton
                disabled={ref.current == 4}
                variant="ghost"
                position="absolute"
                transform={'translate(0%, -50%)'}
                zIndex={2}
                right="0"
                bottom="10"
                onClick={() => setHeader(sliderData[ref.current += 1])}>
                <BiRightArrowAlt size="40px" />
            </IconButton>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: 'xl', sm: '2xl', lg: '4xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                        >
                            {header.heading}
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            colorScheme={'red'}
                            bg={'#6D00C1'}
                            _hover={{ bg: '#6D00C1' }}>
                            Get Demo
                        </Button>
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            border="2px solid"
                        >
                            Sign up For Free
                        </Button>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>
                    <Blob
                        w={'150%'}
                        h={'150%'}
                        position={'absolute'}
                        top={'-20%'}
                        left={0}
                        zIndex={-1}
                        color={useColorModeValue('red.50', 'red.400')}
                    />
                    <Image
                        w={'300px'}
                        h={'100%'}
                        src={header.img}
                    />
                </Flex>
            </Stack>
        </Container >
    );
}

export const Blob = (props) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    );
};