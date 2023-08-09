import { useEffect } from "react";
import Cards from "../Card/Card";
import { getCharacter } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../NavBar/Narbar";
import { removeFav } from "../../redux/actions/actions";
import { Flex, HStack } from "@chakra-ui/react";
import Paginado from "../Paginado/Paginado";
const Home = ({onClose}) => {  

     const dispatch = useDispatch();  

      useEffect(() => {
         dispatch(getCharacter());
     }, [dispatch]) 
      
     const characters = useSelector((state) => state.characters)
     console.log(characters)
     const charactersList = characters?.results

     const handleCloseCharacter = (id) => {
      // Aquí implementa la lógica para eliminar el personaje con el ID proporcionado.
      console.log("Personaje a eliminar con ID:", id);
      // Llama a la acción removeFav para eliminar el personaje del estado global de Redux.
      dispatch(removeFav(id));
    };
    
   
    return (
       
    <div>
      <div>
         <Navbar/>
      </div>
      <Flex flexWrap='wrap' gap='10px'>
      
      {   
          charactersList?.map(({id, name, status, species, gender, origin, image}) =>{
       return(
          <Cards 
          key={id}
          id={id}
          name={name}
          status={status}
          image={image}
          origin={origin.name}
        />
       )
      }) 
 }
   </Flex>
   <div>
      <Paginado/>
   </div>
    </div>
    )
 }
 export default Home;