import { Link } from "react-router-dom"
import { connect, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {addFav, removeFav} from '../../redux/actions/actions';
import { Card, CardBody, Heading, Image, Text, VStack, Box } from "@chakra-ui/react";
const Cards = ({id, name, status, species, gender, origin, image,myFavorites}) => {
 const [isFav, setIsFav] = useState(false);
 const dispatch = useDispatch();
 const handleFavorite = () => {
   if(isFav){
      setIsFav(false); 
      dispatch(removeFav(id))
   }
   else {
      setIsFav(true); 
      dispatch(addFav({id, name, status, species, gender, origin, image, myFavorites}))
   }
 }
 useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

const [hovered, setHovered] = useState(false);

const handleMouseEnter = () => {
  setHovered(true);
};

const handleMouseLeave = () => {
  setHovered(false);
};
return (
<Card bgColor="rgba(128, 128, 128, 0.2)" p="1rem">
  <Box position="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <Image src={image} alt="" />
    <CardBody
      position="absolute"
      bottom={hovered ? "40" : "-0%"}
      left="0"
      right="0"
      transition="bottom 1s"
      bgColor="rgba(0, 0, 0, 0.6)"
      p="1rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      <Link to={`/detail/${id}`}>
        <Heading size="lg">{name}</Heading>
      </Link>
      <Text color="rgba(128,128,128,1)" fontSize="18px">{status}</Text>
      <Text>{species}</Text>
      <Text>{gender}</Text>
      <Text color="rgba(128,128,128,1)" fontSize="18px">{origin}</Text>
    </CardBody>
  </Box>
</Card>
)
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites

   }
}

export default connect(
  mapStateToProps,
  
)(Cards);