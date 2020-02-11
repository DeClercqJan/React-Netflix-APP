import React from "react";

const MovieDetails = (props) => {
  console.log(props);
  //     const [movieSelected, setMovieSelected] = useState([]);
  //     let { movieID } = useParams();
  //     const key = "bde60eb3d70191bf80d726a2da4ae238";
  //     const fetchData = async () => {
  //       let response = await Axios.get(
  //         `https://api.themoviedb.org/3/movie/${movieID};}?api_key=${key}&language=en-US`
  //       );
  //       let responseData = await response.data;
  //       setMovieSelected(responseData);
  //       console.log(responseData);
  //     };
  //     useEffect(() => {
  //       fetchData();
  //     }, []);
  //     return <p>{movieSelected.title}</p>;
  return <p>Moviedetails</p>;
};

export default MovieDetails;
