import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrow from '../../assets/images/arrow.svg'
import { loadMovies } from './moviesSlice'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { img_original } from '../../config'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const MoviesWrapper = styled.div`
    padding-top: 23px;
    padding-bottom: 50px;
`

const MoviesLink = styled(Link)`
    padding-left: 100px;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
    font-family: 'Raleway-Bold';
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 42px;
`

const SwiperWrapper = styled(Swiper)`
    padding-left: 100px;
    user-select: none;
    
    & .swiper-button-prev, & .swiper-button-next {
        color: #FFFFFF;
        opacity: 1;
        
        &.swiper-button-disabled {
            display: none;
        }
        
        ::after {
            font-size: 25px;
            font-weight: 700;
        }
    }
`

const SliderItem = styled(SwiperSlide)`
    height: 462px;
    transition: .3s;
    position: relative;
    :hover {
        opacity: 0.5;
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        border: 1px solid #000000;
        filter: drop-shadow(0px 4px 4px #000000);
    }
`

const SliderItemTitle = styled.h2`
    color: #FFFFFF;
    font-family: 'Raleway-Bold';
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
`

const Movies = () => {
    const dispatch = useDispatch()
    const { results } = useSelector(state => state.movies.list)



    useEffect(() => {
        dispatch(loadMovies())
    }, [])

    return (
        <MoviesWrapper>
            <MoviesLink to={'/films'}>
                Фильмы
                <img src={arrow} alt="" />
            </MoviesLink>
            <SwiperWrapper
                modules={[Navigation]}
                spaceBetween={25}
                breakpoints={{
                    320: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 2
                    },
                    900: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    },
                    1440: {
                        slidesPerView: 5
                    },
                }}
                navigation
            >
                {
                    results && results.map((item, i) => (
                        <SliderItem>
                            <Link to={'/'}>
                                <img src={`${img_original}${item.backdrop_path}`} alt="" />
                            </Link>
                            <SliderItemTitle>
                                {item.title}
                            </SliderItemTitle>
                        </SliderItem>
                    ))
                }

            </SwiperWrapper>
        </MoviesWrapper>
    )
}

export default Movies