import { Link } from "react-router-dom"
import { connect, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {addFav, removeFav} from '../../redux/actions/actions';
import { Card, CardBody, Heading, Image, Text, VStack } from "@chakra-ui/react";
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

   return (
      <Card>
         <CardBody>
         {
          isFav ? (
               <button onClick={handleFavorite}>❤️</button>
          ) : (
               <button onClick={handleFavorite}>🤍</button>
         )
          }
         
         <Image src={image} alt=''/> 
         <Link to={`/detail/${id}`}> 
         <Heading size='10px' >{name}</Heading>
         </Link>
         <Text >{status}</Text>
         <Text >{species}</Text>
         <Text >{gender}</Text>
         <Text >{origin}</Text>
        
         </CardBody>
      </Card>
   );
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites

   }
}

export default connect(
  mapStateToProps,
  
)(Cards);