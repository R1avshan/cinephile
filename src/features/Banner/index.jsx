import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Loader from '../../components/Loader'
import BannerItem from './BannerItem'
import { loadBannerInfo } from './bannerSlice'

const BannerWrapper = styled.div`
    position: relative;
    height: 100vh;
    /* overflow: hidden; */
`


const Banner = () => {
    const [slide, setSlide] = useState(0)
    const dispatch = useDispatch()
    const { list } = useSelector(state => state.banner)
    const { loading } = useSelector(state => state.banner)



    useEffect(() => {
        dispatch(loadBannerInfo())
    }, [])

    useEffect(() => {
        let timeout = setTimeout(nextSlide, 10000)

        return () => {
            clearTimeout(timeout)
        }
    }, [slide])

    const nextSlide = () => {
        if (list.length - 1 === slide) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    }

    const handleClickNext = () => {
        if (list.length - 1 === slide) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    }


    return (
        <>
            {loading && <Loader />}
            <BannerWrapper>
                {
                    list.map((item, i) => (
                        slide === i ?
                            <BannerItem
                                key={item.id}
                                movie={item}
                                next={list[i + 1 === list.length ? 0 : i + 1]}
                                handleClick={handleClickNext}
                            />
                            : null
                    ))
                }
            </BannerWrapper>
        </>
    )
}

export default Banner