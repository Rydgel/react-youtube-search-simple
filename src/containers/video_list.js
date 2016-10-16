import React, { Component } from "react";
import { connect } from "react-redux";
import VideoListItem from "./video_list_item";


class VideoList extends Component {
    render() {
        const videoItems = this.props.videos.map((v) => {
            return (
                <VideoListItem key={v.etag} video={v} />
            );
        });

        return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        videos: state.videos
    }
}

export default connect(mapStateToProps)(VideoList);