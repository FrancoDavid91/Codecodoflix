import React from 'react'
import {AppSwiper} from '../app_swipper/app_swiper'
import AppSwiperSlide from '../app_swipper/components-swiper/app_swiper_slide'
import AppTitle from '../app_title/app_title'


const AppCarouselSection = ({title, data}) => {
    return (
        <>
            <AppTitle>{title}</AppTitle>
            <AppSwiper>
                {data?.map((e) => (
                    <AppSwiperSlide key={e.id}>
                        <div
                            style={{
                                width: "250px",
                                height: "150px",
                                backgroundImage: `url(${e.backdrop})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                cursor: "pointer",
                            }}
                        >
                            <h3>{e.title}</h3>
                        </div>
                    </AppSwiperSlide>
                ))}
            </AppSwiper>
        </>
    )
}

export default AppCarouselSection