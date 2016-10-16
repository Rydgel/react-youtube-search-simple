import React, { Component } from "react";
import { connect } from "react-redux";
import { videoSearch } from "../actions";
import { bindActionCreators } from "redux";
import _ from "lodash";


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: "" };
        // default search
        this.props.videoSearch("lirik");
        // throttled the search
        this.throttledVideoSearch = _.debounce(term => this.props.videoSearch(term), 500);
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={ev => this.onInputChanged(ev.target.value) } />
            </div>
        );
    }

    onInputChanged(term) {
        this.setState({term});
        this.throttledVideoSearch(term);
    }
}


function mapStateToProps(state) {
    return {
        videos: state.videos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ videoSearch: videoSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);