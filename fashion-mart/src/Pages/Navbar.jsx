import {
  Flex,
  ButtonGroup,
  Button,
  Text,
  Input,
  IconButton,
  Image
} from "@chakra-ui/react";
import { SearchIcon, Footer } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "./logo.png"
function Navbar({handleSearch,handleSearchClick}) {
  let style = {
    border: "1px solid black"
  }
  return (
    <div>
      <div>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Text size="md" fontSize="30" as="b">
            <Link to="/">
              <Image src={logo} alt="" h="170px" w="320px"/>
            </Link>
          </Text>
          <Text size="md" fontSize="20" mr="5"><Link to="/WomenProductPage">WOMEN</Link>
          </Text>
          <Text size="md" fontSize="20"><Link to="/MenProductPage" m="5">MEN</Link>
          </Text>
          <Input type="text" border="0px" borderBlock={style.border} onChange={handleSearch} /><IconButton aria-label='Search database' icon={<SearchIcon onClick={handleSearchClick}/>} mr="40px" />
          <ButtonGroup m="4" gap="2">
            <Button colorScheme="black" variant="outline">
              <Link to="/SignUpPage">Sign Up</Link>
            </Button>
            <Button colorScheme="black" variant="outline">
              <Link to="/LoginPage">Log In</Link>
            </Button>
          </ButtonGroup>
        </Flex>
        <hr />
      </div>
    </div>
  );
}
export default Navbar;
