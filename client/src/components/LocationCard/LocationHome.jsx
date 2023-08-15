import { useDispatch, useSelector } from "react-redux";
import{React, useEffect} from 'react';
import { getLocation } from "../../redux/actions/actions";
import LocationCard from "./LocationCard";
import { Link } from "react-router-dom";
import { Box, Button, HStack } from "@chakra-ui/react";
const LocationHome = () => {
const dispatch = useDispatch();  

useEffect(() => {
   dispatch(getLocation());
}, [dispatch]) 

const locations = useSelector((state) => state.locations)
console.log(locations)
const LocationsList = locations?.results


return (
 
<Box bgColor="black">
    <Box mb={10} >
        <Button>
            <Link to='/'>HOME</Link>
        </Button>
    </Box>
    <HStack flexWrap='wrap' gap='30px' ml="30px">
{   
    LocationsList?.map(({id, name, type, dimension, residents, created}) =>{
 return(
    <LocationCard
    key={id}
    id={id}
    name={name}
    type={type}
    dimension={dimension}
    residents={residents}
    created={created}/> 
 )
}) 
}
</HStack>
</Box>
)
}
export default LocationHome;