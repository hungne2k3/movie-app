import PropTypes from "propTypes";

const MovieSearch = ({ title, data }) => {
    return (
        <div>MovieSearch</div>
    )
}

MovieSearch.prototype = {
    title: PropTypes.string,
    data: PropTypes.array
}

export default MovieSearch