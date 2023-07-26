import React from "react";
import {useParams} from "react-router-dom";

const MovieShow=({movies})=>{
    const params=useParams()
    console.log(params)
    return(
        <div>
            <h3>{movies[params.movieid].title}</h3>
        </div>
    )
}
export  default  MovieShow