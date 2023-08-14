import Card from "../Card/Card";
import { connect } from "react-redux";
import { Box, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Favorites = ({myFavorites}) =>  {
    return(
        <Box bgColor="black" p={123} h="700" >
            <Box mb={10}>
              <Button bg={"transparent"} color={"white"} padding={"20px"}>
                <Link to="/" color="white"> HOME </Link>
                </Button>  
            </Box>
            <HStack flexWrap='wrap' gap='10px' ml="30px" >
      
        {
            myFavorites?.map(fav => {
                return (
                    <Card
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    species={fav.species}
                    gender={fav.gender}
                    image={fav.image}
                    onClose={fav.onClose}
                    />
                )
            })
        }
        </HStack>
        </Box>
    )
}
const mapStateToProps = (state) =>{
 return{
    myFavorites: state.myFavorites
 }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);