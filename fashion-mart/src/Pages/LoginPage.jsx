import { Heading, FormControl, Box, Center, Button, FormLabel, Flex, Input, Text, ButtonGroup, Spacer,Image } from "@chakra-ui/react";
import { Link, Navigate} from "react-router-dom"
import logo from "./logo.png"
import {GetSignUpData} from "../AllApi/Api"
import { useState ,useReducer, useContext} from "react";
import { AuthContext } from "../context/AuthContext";

let initState = {
  email: "",
  password: ""
}

const reducer = (state, action) => {
  switch (action.type) {
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

function LoginPage() {

  const {login,logout} = useContext(AuthContext)

  const [state, dispatch] = useReducer(reducer, initState)
  const {email, password } = state;
  const [loginData,setLoginData] = useState([]);
  const [signUpData,setSignUpData] = useState([])

  let style = {
    border: "1px solid black",
    borderRadius: "10px",
    alignItem: "center",
  }

  const handleChange = (e)=>{
    let {type,name,value} = e.target;
    let valueForm = value;;
    dispatch({type:name,payload:valueForm})
  }

  const handleLoginSubmit = (e)=>{
    e.preventDefault();
    login();
    setLoginData(state);
    GetSignUpData().then((res)=>setSignUpData(res?.data)).catch((err)=>console.log(err))
    dispatch({type:"reset"})
  }

  for(let i=0;i<signUpData.length;i++){
    if(loginData.email === signUpData[i].email && loginData.password === signUpData[i].password){
      alert("login successefull");
      break;
    }
  }

  const handleLogout = ()=>{
    logout();
  }

  return (
    <div>
      <div>
      <Flex minWidth="max-content" alignItems="center" gap="2" border="1px solid black">
          <Box>
            <Text size="md" fontSize="30" as="b">
              <Link to="/">
              <Image src={logo} alt="" h="120px" w="150px"/>
              </Link>
            </Text>
          </Box>
          <Spacer />
          <Box>
            <ButtonGroup m="4" gap="2">
              <Button colorScheme="black" variant="outline">
                <Link to="/SignUpPage">Signup</Link>
              </Button>
              <Button colorScheme="black" variant="outline">
                <Link to="/LoginPage">Login</Link>
              </Button>
              <Button colorScheme="black" variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
        <hr />
      </div>
      <Heading as="h1" mt="50">Login</Heading>
      <Box w="450px" m="auto" border={style.border} borderRadius={style.borderRadius} p="5" mt="30">
        <form data-testid="form-element" onSubmit={handleLoginSubmit}>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input type="text" name="email" value={email} placeholder="Enter Name" mb="2" border={style.border} onChange={handleChange} />
            <FormLabel>Password</FormLabel>
            <Input type="text" name="password" value={password} placeholder="Enter Password" border={style.border} onChange={handleChange} />
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