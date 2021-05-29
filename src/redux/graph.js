import * as ActionTypes from "./ActionTypes";

export const Graph = (state = {isLoading:true, errMess:null, graph:[]}, action)=>{
    switch (action.type){
        case ActionTypes.GET_GRAPH:
            return {...state, isLoading: false, errMess: null, graph: action.payload};

        case ActionTypes.GET_GRAPH_LOADING:
            return {...state, isLoading: true, errMess: null, graph: []};

        case ActionTypes.GET_GRAPH_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
}