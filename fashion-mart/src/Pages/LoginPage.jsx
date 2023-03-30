import { Heading, FormControl, Box, Center, Button, FormLabel, Flex, Input, Text, ButtonGroup, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom"
function LoginPage() {
  let style = {
    border: "1px solid black",
    borderRadius: "10px",
    alignItem: "center",
  }
  return (
    <div>
      <div>
        <Flex minWidth="max-content" alignItems="center" gap="2" p="5">
          <Box>
            <Text size="md" fontSize="30" as="b" mr="5">
              <Link to="/">
                FASHION MART
              </Link>
            </Text>
          </Box>
          <Spacer />
          <Box>
            <ButtonGroup m="4" gap="2">
              <Button colorScheme="black" variant="outline">
                <Link to="/SignUpPage">Sign Up</Link>
              </Button>
              <Button colorScheme="black" variant="outline">
                <Link to="/LoginPage">Log In</Link>
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
        <hr />
      </div>
      <Heading as="h1" mt="50">Login</Heading>
      <Box w="450px" m="auto" border={style.border} borderRadius={style.borderRadius} p="5" mt="30">
        <form data-testid="form-element" >
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input type="text" name="email" placeholder="Enter Name" mb="2" border={style.border} />
            <FormLabel>Password</FormLabel>
            <Input type="text" name="password" placeholder="Enter Password" border={style.border} />
            <Center>
              <Button variant="solid" bg="aqua" type="submit" mt="3">
                SUBMIT
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>
    </div>
  )
}
export default LoginPage