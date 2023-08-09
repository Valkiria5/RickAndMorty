import { Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const About = () => {
    return(
        <Box>
            <Link to="/">Home</Link>
            <Text>Hello! I am Vanina Ramayo, I am 21 years old, and this is a small project made with JavaScript, React, Redux, and ChakraUI. 
                I am a FullStack Developer, but I lean more towards dedicating myself to Front-End.</Text>
            <Text>ChatGPT

This small project is based on the TV series Rick and Morty. We can search for characters by their name, paginate
 them, filter them by their planet of origin and by gender, in addition to sorting them in A-Z and Z-A order.</Text>
        </Box>
    )
}
export default About; 