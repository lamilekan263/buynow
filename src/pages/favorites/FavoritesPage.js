import React from 'react'
import Wishlist from '../../components/Wishlist/Wishlist'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from 'react-router-dom';

const FavoritesPage = () => {
    const history = useHistory()
    return (
        <div className='container my-1'>
            <ArrowBackIcon  className="my-3" onClick={history.goBack} />
            <Wishlist />
        </div>
    )
}

export default FavoritesPage
