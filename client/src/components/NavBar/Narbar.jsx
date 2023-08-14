import SearchBar from "../SearchBar/SearchBar"
import React from "react"
import { Link } from "react-router-dom"
import Paginado from "../Paginado/Paginado"
import {  Image, Flex, Button,  HStack , chakra, Stack} from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Stack
        direction={"row"}
        bgGradient="linear(to-r,rgba(0,0,0,0.7),rgba(0,0,0,0.7))"
        spacing={100}
        alignItems={"center"}
        fontSize={"20px"}
        zIndex={"100"}
        width={"100%"}
        bgColor="#7FFFD4"
        p={4}
      >
         <SearchBar />
             <HStack>
            </HStack>
            <HStack>
            <Button bg={"transparent"} color={"white"} padding={"20px"}>
                <Link to='/favorites'>FAVORITES</Link>
            </Button>
            </HStack>
            <HStack>
            <Button bg={"transparent"} color={"white"} padding={"20px"}>
                <Link to= '/locations'>PLANETS</Link>
            </Button>
            </HStack>
        </Stack>
    )
}
export default Navbar;
