import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Graph } from "./graph";
import { InitialFeedback } from "./options";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            graph: Graph,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}