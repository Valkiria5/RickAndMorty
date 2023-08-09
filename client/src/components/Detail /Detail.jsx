import {useParams, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getDetail, resState} from '../../redux/actions/actions'
import { useEffect } from 'react';
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
        <div >
        <div>
            <h1>Character Detail</h1>
            <Link to= '/'>
                <button onClick={resState}>HOME</button>
            </Link>
        </div>
                <main>
                    <div>
                        <div >
                            <img src={detail.image} alt=''/>
                        </div>
                        <div>
                            <h3> NAME : {detail.name}</h3>
                            <h3> STATUS: {detail.status} </h3>
                            <h3> SPECIES: {detail.species}</h3>
                            <h3> GENDER: {detail.gender}</h3>
                            <h3> ORIGIN : {detail.origin?.name}</h3>
                            <h3> LOCATION: {detail.location?.name}</h3>
                            <h3> EPISODES: {detail.episode} </h3>
                        </div>
                    </div>
                </main>
        </div>
    )
}
export default Detail;