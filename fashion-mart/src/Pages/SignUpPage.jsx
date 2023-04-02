import { Heading, FormControl, Box, Center, Button, FormLabel, Flex, Input, Text, ButtonGroup, Spacer, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "./logo.png"
import { useReducer, useState } from "react";
import {PostSignUpData} from "../AllApi/Api"

let initState = {
  name: "",
  email: "",
  password: ""
}

const reducer = (state, action) => {
  switch (action.type) {
    case "name": {
      return { ...state, name: action.payload }
    }
    case "email": {
      return { ...state, email: action.payload }
    }
    case "password": {
      return { ...state, password: action.payload }
    }
    case "reset": {
      return initState
    }
    default: {
      return state;
    }
  }
}

function SignUpPage() {

  const [state, dispatch] = useReducer(reducer, initState)
  const [signupData, setSignUpData] = useState([])

  const { name, email, password } = state;
  // console.log(state)

  const handleChange = (e) => {
    let { name, value } = e.target;
    let valueForm = value
    dispatch({ type: name, payload: valueForm })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSignUpData([...signupData, state]);
    PostSignUpData(state)
    dispatch({type:"reset"})
  }


  let style = {
    border: "2px solid black",
    borderRadius: "10px",
    alignItem: "center"
  }
  return (
    <div>
      <div>
        <Flex boxShadow="2xl" minWidth="max-content" alignItems="center" gap="2" border="1px solid black">
          <Box>
            <Text size="md" fontSize="30" as="b">
              <Link to="/">
                <Image src={logo} alt="" h="150px" w="180px" />
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
      <Heading as="h1" mt="50">Sign Up</Heading>
      <Box boxShadow="2xl" w="500px" m="auto" border={style.border} borderRadius={style.borderRadius} p="5" mt="30">
        <form data-testid="form-element" onSubmit={handleSubmit} >
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" name="name" value={name} placeholder="Enter Your Name" mb="2" border={style.border} onChange={handleChange} />
            <FormLabel>Email Address</FormLabel>
            <Input type="text" name="email" value={email} placeholder="Enter Name" mb="2" border={style.border} onChange={handleChange} />
            <FormLabel>Password</FormLabel>
            <Input type="text" name="password" value={password} placeholder="Enter Password" border={style.border} onChange={handleChange} />
            <Center>
              <Button variant="solid" bg="aqua" type="submit" mt="3">
                Sign Up
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>
    </div>
  )
}
export default SignUpPage;