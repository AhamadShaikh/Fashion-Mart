import {
  Flex,
  ButtonGroup,
  Button,
  Text,
  Input,
  IconButton
} from "@chakra-ui/react";
import { SearchIcon, Footer } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
// import {logo} from ""
function Navbar() {
  let style={
    border:"1px solid black"
  }
  return (
    <div>
      <div>
        <Flex minWidth="max-content" alignItems="center" gap="2" p="5">
          <Text size="md" fontSize="30" as="b" mr="5">
            <Link to="/">
              FASHION MART
            </Link>
          </Text>
          <Text size="md" fontSize="20" mr="5"><Link to="/WomenProductPage">WOMEN</Link>
          </Text>
          <Text size="md" fontSize="20"><Link to="/MenProductPage">MEN</Link>
          </Text>
          <Input type="text" border="0px"borderBlock={style.border} /><IconButton aria-label='Search database' icon={<SearchIcon />} mr="40px"/>
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
