import { Box,Heading,Text} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box textAlign={"center"} bg="#6B46C1" pb="240px" pt="90px" color="white">
        <Heading pb="14px">
          Simple pricing for your business
        </Heading>
        <Text>
          Plans that are carefully crafted to suit your business.
        </Text>
    </Box>
  )
}
 