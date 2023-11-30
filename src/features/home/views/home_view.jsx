import AppCard from '../../../core/components/app_card/app_card'
import { useAuth } from '../../../core/auth/hook/use_auth'
import AppCarouselSection from '../../../core/components/app_carousel_section/app_carousel_section'
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/movies.services'
import { getAiringTodayTv, getPopularTv, getTopRatedTv } from '../services/tv.service'
import FooterView from '../../footer/views/footer_view'

import useSWR from 'swr'



const HomeView = () => {

  const { logout } = useAuth()

  //Uso SWR library para manejar peticiones
  //------Movies--------
  const { data: popularMovies,
    error: popularMoviesError,
    isLoading: popularMoviesIsLoading,
  } = useSWR('getPopularMovies', getPopularMovies)

  const { data: topRatedMovies,
    error: topRatedMoviesError,
    isLoading: topRatedMoviesIsLoading,
  } = useSWR('getTopRatedMovies', getTopRatedMovies)

  const { data: upComingMovies,
    error: upComingMoviesError,
    isLoading: upComingMoviesIsLoading,
  } = useSWR('getUpComingMovies', getUpcomingMovies)
  //------Tv--------
  const { data: popularTv,
    error: popularTvError,
    isLoading: popularTvIsLoading,
  } = useSWR('getPopularTv', getPopularTv)

  const { data: topRatedTv,
    error: topRatedTvError,
    isLoading: topRatedTvIsLoading,
  } = useSWR('getTopRatedTv', getTopRatedTv)

  const { data: airingTodayTv,
    error: airingTodayTvError,
    isLoading: airingTodayTvIsLoading,
  } = useSWR('getAiringTodayTv', getAiringTodayTv)

  return (
    <>
      <div className='container-header'>
        <div>
          <img src="/../../../src/assets/tituloImagen.png" alt="Título codecodoflix" />
          <h3>HOME</h3>
        </div>
        <button onClick={logout} className='btn btn-close'>Cerrar Sesión</button>
      </div>

      <div className='container-corousel'>
        <AppCarouselSection title={"Popular Movies"} data={popularMovies}></AppCarouselSection>
        <AppCarouselSection title={"Top Rated Movies"} data={topRatedMovies}></AppCarouselSection>
        <AppCarouselSection title={"Upcoming Movies"} data={upComingMovies}></AppCarouselSection>

        <AppCarouselSection title={"Popular Tv"} data={popularTv}></AppCarouselSection>
        <AppCarouselSection title={"Top Rated Tv"} data={topRatedTv}></AppCarouselSection>
        <AppCarouselSection title={"Airing Today Tv"} data={airingTodayTv}></AppCarouselSection>
      </div>

      <FooterView></FooterView>

    </>
  )
}

export default HomeView


//Modelado de Card para cada movie/serie realizada con patrón Compount-component a implementar..

{/* <AppCard
  width="300px"
  height="150px"
  backgroundImageSrc="https://picsum.photos/300/150"
>
  <AppCard.Header>HEADER</AppCard.Header>
  <AppCard.Body>BODY</AppCard.Body>
  <AppCard.Footer>FOOTER</AppCard.Footer>
</AppCard> */}