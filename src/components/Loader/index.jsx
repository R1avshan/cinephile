import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'


const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const LoaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000000;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    
    span {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 3px solid gray;
        border-top: 2px solid red;
        animation: ${rotate} 1s infinite ease-in-out;
    }
`

const Loader = () => {
    return (
        <LoaderWrapper>
            <span></span>
        </LoaderWrapper>
    )
}

export default Loader