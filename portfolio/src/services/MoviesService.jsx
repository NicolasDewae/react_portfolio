import React from "react";
import axios from "axios";
import { API_BASE_URL, API_KEY } from "../data/globalVar";

export default class MovieService extends React.Component {

    /**
     * Get movies by id
     * @param {string} id
     * @param {function} setMovies
     */
    getMoviesById(id, setMovies) {
        axios.get(API_BASE_URL + "/movie/" + id + "?language=fr-FR",{
            headers: {
                Authorization: "Bearer " + API_KEY ,
            },
        })
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
}
    