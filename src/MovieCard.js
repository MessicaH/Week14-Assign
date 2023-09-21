import React from "react"
import "./MovieCard.css"
import RatingCard from "./RatingCard"

/* If we don't have a direct image file with API_IMG path, use the Unsplash one in "moviePoster" div */

const MovieCard = (props) => {

    const API_IMG = "https://image.tmdb.org/t/p/w500/"

    return (
        <div className="container card movieCard">
            <div className="moviePoster">
                <img src={props.poster_path ? API_IMG + props.poster_path : "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2056&q=80"} className="posterImage"/>
            </div>

            <div className="movieInfo">
                <span className="title">{props.title}</span>
                <span className="year">Release Date:<br/>{props.release_date.split("/").reverse()}</span>
            </div>
            <div className="movieRatings">
                <span className="ratingText">Current TMDB Rating: </span><span className="currentRating">{props.vote_average}</span>
            </div>

            <div className="movieOverview">
                <h5 className="titleOverview">Synopsis for <span className="title">{props.title}</span></h5>
                <p className="synopsisOverview">{props.overview}</p>
                <h6 className="ratingRequest">Already seen this movie?</h6>
                <button className="btn btn-info">React to this Movie</button>
            </div>
        </div>
    )
}

export default MovieCard;

/* Now let's repurpose the Button for "Rate this Movie" to redirect to a second page/.js 
where we can combine the RatingCard and RatingComments */


/* How to get so that release_date only displays the YYYY and not MM/DD?

const releaseYear = new Date('{props.release_date}');
    console.log(releaseYear.getFullYear());

    */