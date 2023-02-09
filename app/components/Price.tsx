import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import firstIcon from "../Icons/firstIcon";
import React from "react";

export default function Price() {
  return (
    <Box
      bg={"#FFFFFF"}
      borderRadius="10px"
      overflow={"hidden"}
      maxW="994px"
      ml={{ base: "10px", md: "20px", lg: "auto" }}
      mr={{ base: "10px", md: "20px", lg: "auto" }}
      mt="-160"
      boxShadow={
        "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
      }
    >
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box bg={"#F0EAFB"} p="50px" textAlign={"center"}>
          <Text fontWeight={"bold"} fontSize="24px">
            Premium PRO
          </Text>
          <Heading fontSize={"60px"} mt="10px">
            $329
          </Heading>
          <Text mb="15px" mt="6px">
            billed just once
          </Text>
          <Button color="white" bg="#805AD5" w="270px">
            Get Started
          </Button>
        </Box>
        <Box p="48px">
          <Text mb="20px">
            Access these features when you get this pricing package for your
            business.
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
  );
}
