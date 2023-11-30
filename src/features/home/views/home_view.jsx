import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'
import { authApi } from '../../../core/datasource/remote/auth/auth_api'
import AppButton from '../../../core/components/app_button/app_button'
import { AppSwiper } from '../../../core/components/app_swipper/app_swiper'
import AppSwiperSlide from '../../../core/components/app_swipper/components-swiper/app_swiper_slide'
import { getPopularMovies } from '../services/movies.services'

const HomeView = () => {

  getPopularMovies()

  return (
    <div>
      <h1>Peliculas</h1>
      <AppSwiper>
        {Array.from({ length: 10 }).map((_, i) => (
          <AppSwiperSlide key={i}>
            <div
              style={{
                width: "150px",
                height: "250px",
                backgroundColor: 'red'
              }}
            >
              <h3>{i}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
    </div>
  )
}

export default HomeView