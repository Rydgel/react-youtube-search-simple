import YTSearch from "youtube-api-search";
import { API_KEY } from "../config"


export function selectVideo(video) {
    return {
        type: 'VIDEO_SELECTED',
        payload: video
    }
}

export function videoSearch(term) {
    return dispatch => YTSearch({key: API_KEY, term: term}, (videos) => {
        dispatch({
            type: 'VIDEO_SEARCH',
            payload: videos
        });
        dispatch({
            type: "VIDEO_SELECTED",
            payload: videos[0]
        })
    });
}
