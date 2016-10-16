import { combineReducers } from 'redux';
import ReducerActiveVideo from "./reducer_active_video"
import ReducerSearchVideo from "./reducer_search_video"


const rootReducer = combineReducers({
    activeVideo: ReducerActiveVideo,
    videos: ReducerSearchVideo,
});

export default rootReducer;