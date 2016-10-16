export default function (state = [], action) {
    switch (action.type) {
        case "VIDEO_SEARCH":
            return action.payload;
            break;
        default:
            // nothing
            return state;
    }
}