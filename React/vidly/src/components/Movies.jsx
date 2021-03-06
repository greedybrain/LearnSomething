import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import LikeButton from '../common/LikeButton';
import Pagination from '../common/Pagination';
import ListGroup from '../common/ListGroup'
import { paginate } from '../utils/paginate'

class Movies extends Component {
        state = {
                movies: [],
                genres: [],
                selectedGenre: false,
                pageSize: 4,
                currentPage: 1,
        }

        componentDidMount() {
                const genres = [{ name: "All Genres", _id: 0 }, ...getGenres()]
                this.setState({
                        movies: getMovies(),
                        genres
                })
        }
        
        handleGenreSelect = genre => {
                this.setState({
                        selectedGenre: genre,
                        currentPage: 1
                })
        }

        handlePageChange = page => {
                this.setState({ currentPage: page })
        }

        handleLike = movie => {
                const movies = [...this.state.movies];
                const index = movies.indexOf(movie)
                movies[index] = {  ...movies[index] }
                movies[index].liked = !movies[index].liked
                this.setState({ movies })
        }

        handleDelete = movie => {
                const movies = this.state.movies.filter(m => m !== movie)
                this.setState({
                        movies
                })
        }

        render() {
                const { movies: allMovies, currentPage, pageSize, genres, selectedGenre } = this.state
                const { length: count } = allMovies
                if (count === 0) return <p>There are no movies in the database.</p>

                const filtered = selectedGenre && selectedGenre._id
                        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
                        : allMovies
                const movies = paginate(filtered, currentPage, pageSize)

                return (
                        <div className='row'>
                                <div className="col-3">
                                        <ListGroup 
                                                items={genres} 
                                                onItemSelect={this.handleGenreSelect} 
                                                selectedItem={ selectedGenre }
                                        />
                                </div>
                                <div className="col">
                                        <p>Showing { filtered.length } movies in the database. </p>
                                        <table className="table">
                                                <thead>
                                                        <tr>
                                                                <th>Title</th>
                                                                <th>Genre</th>
                                                                <th>Stock</th>
                                                                <th>Rate</th>
                                                                <th></th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        {movies.map(movie => (
                                                                <tr key={movie._id}>
                                                                        <td>{ movie.title }</td>
                                                                        <td>{movie.genre.name}</td>
                                                                        <td>{movie.numberInStock}</td>
                                                                        <td>{movie.dailyRentalRate}</td>
                                                                        <td><LikeButton liked={movie.liked} onLike={() => this.handleLike(movie)} /></td>
                                                                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                                                                </tr>
                                                        ))}
                                                </tbody>
                                        </table>
                                        <Pagination 
                                                itemsCount={ filtered.length } 
                                                pageSize={ pageSize } 
                                                currentPage={currentPage}
                                                onPageChange={this.handlePageChange}
                                        />
                                </div>
                        </div>
                        
                );
        }
}

export default Movies;