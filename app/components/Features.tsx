import React from "react";
import { Box, Flex, Icon, Text, HStack } from "@chakra-ui/react";
import stars from "../Icons/stars";
import fee from "../Icons/fee";
import scroll from "../Icons/scroll";

export default function Features() {
  return (
    <Box maxW={"850px"} mx="auto" mt="40px" mb="100px" pl="50px">
      <Flex direction={{ base: "column", md: "row", lg: "row" }}>
        <HStack mt={{ base: "15px", md: "auto", lg: "auto" }}>
          <Icon as={stars} />
          <Text font-size="10px" fontWeight={"bold"} pl="10px">
            30 days money back Guarantee
          </Text>
        </HStack>
        <HStack mt={{ base: "15px", md: "auto", lg: "auto" }}>
          <Icon as={fee} />
          <Text font-size="10px" fontWeight={"bold"} pl="10px">
            No setup fees 100% hassle-free
          </Text>
        </HStack>
        <HStack mt={{ base: "15px", md: "auto", lg: "auto" }}>
          <Icon as={scroll} />
          <Text font-size="10px" fontWeight={"bold"} pl="10px">
            No monthly subscription Pay once and for all
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
}
