import { useDispatch, useSelector } from "react-redux";
import{React, useEffect} from 'react';
import { getLocation } from "../../redux/actions/actions";
import LocationCard from "./LocationCard";
import { Link } from "react-router-dom";
const LocationHome = () => {
const dispatch = useDispatch();  

useEffect(() => {
   dispatch(getLocation());
}, [dispatch]) 

const locations = useSelector((state) => state.locations)
console.log(locations)
const LocationsList = locations?.results


return (
 
<div>
    <div>
        <button>
            <Link to='/'>HOME</Link>
        </button>
    </div>
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
</div>
)
}
export default LocationHome;