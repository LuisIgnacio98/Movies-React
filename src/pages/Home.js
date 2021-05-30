import React from "react";
import { Row, Col } from "antd";
import useFetch from "../hooks/useFetch";
import SliderMovie from "../components/SliderMovie";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import { URL_API, API } from "../utils/contants";

export default function Home() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );
  const PopularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
  );
  const TopRatedMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`
  );
  return (
    <>
      <SliderMovie movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList movies={PopularMovies} title="Películas Populares" />
        </Col>
        <Col span={12}>
          <MovieList
            title="Top Mejores Películas Puntuadas"
            movies={TopRatedMovies}
          />
        </Col>
      </Row>
      <Footer />
    </>
  );
}
