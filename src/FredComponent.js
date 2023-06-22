import React from "react";
import styled from 'styled-components'

const Fred = styled.div`
    display: flex;
    justify-content:center;
    align-content:center;
    background-color: white;
    color:black;
    width:50%;
    height: 15rem;
    margin:2rem 2rem;
    overflow:auto;


    p{
        color:blue;
        background-color:pink;
        padding:1.5rem;
    }
`

const FredComponent = () => {
    return(
        <>
            <Fred>
                <p>
                    This is Fredrick's Components dddddd 
                    ddddd ddddd dddd ddddd dddd dddd ddd
                    This is Fredrick's Components dddddd 
                    ddddd ddddd dddd ddddd dddd dddd ddd
                    This is Fredrick's Components dddddd 
                    ddddd ddddd dddd ddddd dddd dddd ddd
                    This is Fredrick's Components dddddd 
                    ddddd ddddd dddd ddddd dddd dddd ddd
                    This is Fredrick's Components dddddd 
                    ddddd ddddd dddd ddddd dddd dddd ddd
                    This is Fredrick's Components dddddd 
                    ddddd ddddd dddd ddddd dddd dddd ddd
                    This is Fredrick's Components dddddd 
                    ddddd ddddd dddd ddddd dddd dddd ddd
                    This is Fredrick's Components dddddd 
                    ddddd ddddd dddd ddddd dddd dddd ddd
                </p>
            </Fred>
        </>
    )
}

export default FredComponent