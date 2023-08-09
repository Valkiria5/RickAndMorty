import { useState } from "react";
import { getCharacter, getCharacterByName } from "../../redux/actions/actions";
import { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux"
import { Flex, Input } from '@chakra-ui/react'
const SearchBar = () => {
   
   const[name, setName] = useState("")
   const dispatch = useDispatch();

  useEffect(() => {
    if (name.length > 1) {
      dispatch(getCharacterByName(name));
    } else {
      // Si el campo de búsqueda está vacío, obtén todos los personajes nuevamente
      dispatch(getCharacter());
    }
  }, [name, dispatch]);
     
  const handleChange = (event) => {
    setName(event.target.value);
  };

 

   return (
    <Flex>
    <Input
      onChange={(event) => handleChange(event)}
      type="search"
      name="search"
      value={name}
      placeholder="Type the character Name to search!"
      bg={"transparent"}
    />
  </Flex>
);
};
   export default SearchBar;