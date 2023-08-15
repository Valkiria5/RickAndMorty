import { Card, CardBody, Heading, Image, Text, VStack, Box, HStack } from "@chakra-ui/react";
const LocationCard = ({id, name, type, dimension, residents, created}) => {
    return (
        <Card bgColor="rgba(128, 128, 128, 0.5)"
        boxShadow="md"
        transition="transform 0.3s ease"
        _hover={{ transform: 'translateY(-10px)' }}>
            <CardBody>
                <VStack flexWrap='wrap' gap='30px' ml="30px" >
            <Text color="white">{id}</Text>
            <Text  color="white">NAME: {name}</Text>
            <Text  color="white"> TYPE: {type}</Text>
            <Text  color="white"> DIMENSION: {dimension}</Text>
            <Text  color="white">CREATED: {created}</Text>
              </VStack>
            </CardBody>
        </Card>
        
    )
}
export default LocationCard; 