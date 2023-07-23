import axios from 'axios';

export const getTrendingMovies = async () => {
  try {
    const responce = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day',
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g',
        },
      }
    );
    return responce.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g',
        },
      }
    );
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSearch = async (query) => {
        const responce = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${query}`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g',
            },
          }
        );
        return responce.data.results
};
      
export const getMovieCast = async (movieId) => {
      try {
        const responce = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g',
            },
          }
        );
        return responce.data.cast
      } catch (error) {
        console.log(error.message);
      }
};
    
export const getReviews = async (movieId) => {
      try {
        const responce = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g',
            },
          }
        );
        return responce.data.results;
      } catch (error) {
        console.log(error.message);
      }
    };