import { Box, Button, Flex,Heading,HStack,Text,Icon } from '@chakra-ui/react';
import firstIcon from "../Icons/firstIcon";
import React from 'react'

export default function Price() {
  return (
    <Box bg={"#FFFFFF"} borderRadius="10px" w="994px" mx="auto" mt="-190" >
        <Flex>
        <Box bg={"#F0EAFB"}  p="50px" textAlign={"center"} borderRadius="10px">
            <Text fontWeight={"bold"} fontSize="24px">
                Premium PRO
            </Text>
            <Heading  fontSize={"60px"} mt="10px">
                $329
            </Heading>
            <Text mb="15px" mt="6px">
                billed just once
            </Text>
            <Button color="white" bg="#805AD5" borderRadius={"6px"} w="270px">
                Get Started
            </Button>

        </Box>
        <Box p="48px">
            <Text mb="20px">
               Access these features when you get this pricing package for your business.
            </Text>
            <HStack>
                <Icon as={firstIcon} />
                <Text>International calling and messaging API</Text>
            </HStack>
            <HStack mt="14px">
                <Icon as={firstIcon} />
                <Text>Additional phone numbers</Text>
            </HStack>
            <HStack mt="14px">
                <Icon as={firstIcon} />
                <Text>Automated messages via Zapier</Text>
            </HStack>
            <HStack mt="14px">
                <Icon as={firstIcon} />
                <Text>24/7 support and consulting</Text>
            </HStack>
        </Box>
        </Flex>
    </Box>
  )
}
