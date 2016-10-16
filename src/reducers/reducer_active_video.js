export default function (state = null, action) {
    switch (action.type) {
        case "VIDEO_SELECTED":
            return action.payload;
            break;
        default:
            // nothing
            return state;
    }
}