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
        spacing={70}
        padding={"10px"}
        alignItems={"center"}
        fontSize={"20px"}
        zIndex={"100"}
        width={"100%"}
      >
         <Image src="data:image/jpeg;base64,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" h="50px" />
             <SearchBar />
             <HStack>
             <Button bg={"transparent"} color={"white"} padding={"20px"}>
                <Link to='/about'>ABOUT</Link>
            </Button>
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