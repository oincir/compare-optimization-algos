import * as ActionTypes from './ActionTypes';
import {baseUrl} from "../shared/baseUrl"

export const fetchGraph = () => dispatch => {
    return fetch(baseUrl + "param1" + "param2")// params will be send here
        .then(
            response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error(
                        "Error " + response.status + ": " + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(comments => dispatch(sendGraph(comments)))
        .catch(error => dispatch(graphFailed(error.message)));
};

export const sendGraph = (graph)=>({
    type: ActionTypes.GET_GRAPH,
    payload: graph
});


export const graphFailed = (errmess) => ({
    type: ActionTypes.GET_GRAPH_FAILED,
    payload: errmess
});