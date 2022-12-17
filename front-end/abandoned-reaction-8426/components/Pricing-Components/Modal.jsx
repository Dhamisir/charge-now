import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td
} from '@chakra-ui/react'

export default function PriceModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box textAlign="center">
            <Button onClick={onOpen}>See how our plans compare</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW="80%">
                    <ModalHeader fontSize={{ base: "md", md: "2xl" }}>Invoicing and Subscription Management</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th fontSize="md">Features</Th>
                                        <Th fontSize="md">Launch</Th>
                                        <Th fontSize="md">Rise</Th>
                                        <Th fontSize="md">Scale</Th>
                                        <Th fontSize="md">Enterprise</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Offline Invoicing</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>

                                    <Tr>
                                        <Td>Calendar Billing</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Usage-based (Metered) Billing</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Advance Invoices</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Admin console for subscription management</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Customer portal</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Credit Notes</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Coupons and Discounts</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Gift Subscriptions</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Consolidated Invoicing</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Net-D Payment Terms</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Quotes</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Account Hierarchy</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Pricing Models</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Contract terms</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Multi Decimal Support</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>On-demand Discounting</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td fontWeight="bold" color="red">X</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Backdated Invoicing</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>eInvoicing</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>In-App Purchase Management</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                        <Td>✔️</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}