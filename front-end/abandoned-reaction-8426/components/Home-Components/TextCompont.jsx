import { AnimatePresence, motion } from 'framer-motion'
import { Heading } from '@chakra-ui/react'

export function TextComponent({ text }) {
    return (
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "smooth",
                delay:'0.25'
            }}
            exit={{ opacity: 0 }}
            >
                <Heading
                lineHeight={1.1}
                position={'relative'}
                fontFamily={'MAIN'}
                textAlign={'left'}
                fontSize={{ base: 'xl', sm: '2xl', lg: '40px' }}>
                        <b>{text}</b>
                </Heading>
            </motion.div>
        </AnimatePresence>
    )
}