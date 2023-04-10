import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import banner from '../../../assets/images/bg.png'
import { Button } from '../../../UI/Button'
import bars from '../../../assets/images/bars.svg'
import sliderImg from '../../../assets/images/sliderImg.png'
import { img_500, img_original } from '../../../config'

const BannerItemWrapper = styled.div`
    height: 100%;
`

const Img = styled.img`
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    z-index: -99;
`
const BannerItemContent = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(20, 20, 20, 0.76);
    display: flex;
    align-items: center;
    justify-content: center;
`
const BannerItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
`

const BannerItemTitle = styled.h2`
    font-size: 80px;
    line-height: 94px;
    color: #FFFFFF;
    font-family: 'Raleway-Bold';
`

const BannerItemText = styled.p`
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    font-family: 'Raleway-Regular';
    max-width: 960px;
    width: 100%;
`

const BannerItemNext = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: flex;
    align-items: center;
    width: 30%;
    height: 100px;
    
    img {
        position: absolute;
        width: 50%;
        right: 0;
        top: 0;
        border-radius: 0px 10px 0px 0px;
        height: 100%;
    }
`

const BannerNextContent = styled.div`
    width: 100%;
    background: linear-gradient(90deg, #000000 55.64%, rgba(0, 0, 0, 0) 100%);
    z-index: 99;
    height: 100%;
    border-radius: 10px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
    row-gap: 15px;
    
    p:nth-of-type(1) {
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        font-family: 'Raleway-Regular';
    }
    p:nth-of-type(2) {
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        font-family: 'Raleway-Bold';
    }
`

const anim = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`

const BannerNextBar = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.5);
    z-index: 99;
    border-radius: 0px 0px 10px 10px;
    
    &::before {
        content: '';
        display: block;
        height: 3px;
        background: #FFFFFF;
        animation: ${anim} 10s linear;
    }
`

const BannerItem = ({ movie, next, handleClick }) => {
    return (
        <BannerItemWrapper>
            <Img src={`${img_original}${movie.backdrop_path}`} alt='' />
            <BannerItemContent>
                <BannerItemInfo>
                    <BannerItemTitle>
                        {movie.title}
                    </BannerItemTitle>
                    <BannerItemText>
                        {movie.overview}
                    </BannerItemText>
                    <Button>
                        <img src={bars} alt="" />
                        Подробнее
                    </Button>
                </BannerItemInfo>
            </BannerItemContent>
            <BannerItemNext onClick={handleClick}>
                <img src={`${img_500}${next.backdrop_path}`} alt="" />
                <BannerNextContent>
                    <p>Следующий</p>
                    <p>{next.title}</p>
                </BannerNextContent>
                <BannerNextBar></BannerNextBar>
            </BannerItemNext>
        </BannerItemWrapper>
    )
}

export default BannerItem