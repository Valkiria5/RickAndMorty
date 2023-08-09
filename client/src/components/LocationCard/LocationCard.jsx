const LocationCard = ({id, name, type, dimension, residents, created}) => {
    return (
        <div>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{type}</h3>
            <h3>{dimension}</h3>
            <h3>{residents}</h3>
            <h3>{created}</h3>

        </div>
        
    )
}
export default LocationCard; 