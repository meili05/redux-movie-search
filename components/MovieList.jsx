import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieList extends Component {
	constructor(props) {
		super(props);
	}

	onSearch(event) {
		const searchTarget = event.target.value;
		this.props.loadMovies(searchTarget);
	}

	componentDidMount() {
		this.props.loadMovies('batman');
	}

	render() {
		const movies = this.props.movies.map((movie) => {
			return <li key={movie.imdbID}>{movie.Title}</li>
		});

		return (
			<div>
				<input type="text" onChange={(event) => this.onSearch(event)}/>
				<h1> Movie List </h1>
				{this.props.requestPending &&
					<h3> Request Pending </h3>
			 	}

				{!this.props.requestPending &&
					<div>
						<ul>
							{movies}
						</ul>
					</div>
			 	}
			</div>
		)
	}
}

// MovieList.propTypes = {
// 	onSearchChange: PropTypes.func.isRequired,
// 	movies: PropTypes.array.isRequired,
// 	onDidMount: PropTypes.func
// };

export default MovieList;
