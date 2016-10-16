import React, { Component } from "react";
import { connect } from "react-redux";
import { selectVideo } from "../actions";
import { bindActionCreators } from "redux";


class VideoListItem extends Component {
    render() {
        const video = this.props.video;
        const imageUrl = video.snippet.thumbnails.default.url;

        return (
            <li className="list-group-item" onClick={() => this.props.selectVideo(video)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl} />
                    </div>

                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
        );
    }
}


function mapStateToProps(state) {
    return {
        selectedVideo: state.activeVideo
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectVideo: selectVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoListItem);