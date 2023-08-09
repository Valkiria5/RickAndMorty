
import { HStack, Button, Box, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions/actions"
import React, { useEffect } from "react";


const Paginado = () => {
  
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pages);
  const characters = useSelector((state) => state.characters)
  const handleNext = () => {
    if (characters.next !== null) return dispatch(nextPage(characters));
  };
  const handlePrev = () => {
    if (characters.prev !== null) return dispatch(prevPage(characters));
  };


  return (
    <HStack justifyContent={"center"} py={5}>
      <Button
        onClick={handlePrev}
        value="prev"
        id="prev"
        isDisabled={characters.prev === "null"}
        colorScheme="gray"
        border={"1px solid black"}
      >
        Prev
      </Button>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="transparent"
        h={10}
        w={10}
        colorScheme="gray"
        border={"1px solid black"}
        borderRadius={7}
        textAlign="center"
      >
        {page}
      </Box>
      <Button
        onClick={handleNext}
        value="next"
        id="next "
        isDisabled={characters.next === "null"}
        colorScheme="gray"
        border={"1px solid black"}
      >
        Next
      </Button>
    </HStack>
  );
};

export default Paginado;
