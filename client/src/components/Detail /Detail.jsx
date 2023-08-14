import {useParams, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getDetail, resState} from '../../redux/actions/actions'
import { useEffect } from 'react';
import {Box, Button, Heading, Image, Text} from '@chakra-ui/react';
const Detail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(getDetail(id));
    dispatch(resState(resState));
     },[dispatch, id])
     
    const detail = useSelector((state) => state.detail)
    console.log(detail)
    return (
        <Box  bgColor="black" display="flex" alignItems="center">
  <Box flex="1">
    <Box mr="850px">
    <Link to="/">
      <Button bg={"transparent"} color={"white"} onClick={resState}>HOME</Button>
    </Link>
    </Box>
    <Heading color="rgba(128,128,128,1)">Character Detail</Heading>
    <Box textAlign="left" mb="200px">
      <Text mb="10px" color="rgba(128,128,128,1)" > NAME: {detail.name}</Text>
      <Text  mb="10px" color="rgba(128,128,128,1)" > STATUS: {detail.status} </Text>
      <Text mb="10px" color="rgba(128,128,128,1)" > SPECIES: {detail.species}</Text>
      <Text mb="10px" color="rgba(128,128,128,1)" > GENDER: {detail.gender}</Text>
      <Text mb="10px" color="rgba(128,128,128,1)" > ORIGIN: {detail.origin?.name}</Text>
      <Text mb="10px" color="rgba(128,128,128,1)" > LOCATION: {detail.location?.name}</Text>
      <Text mb="10px" color="rgba(128,128,128,1)" > EPISODES: {detail.episode} </Text>
    </Box>
  </Box>
  <Box>
    <Image mb="500px" borderRadius="300px" src={detail.image} alt="" />
  </Box>
</Box>
    )
}
export default Detail;