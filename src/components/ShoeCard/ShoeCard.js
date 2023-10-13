import React from "react";
import styled from "styled-components/macro";

const ShoeCard = (key, slug, name, imageSrc, price, salesPrice, relaaseDate, numOfColors) => {
    return (
    <Wrapper>
        {name}
    </Wrapper>);
};

const Wrapper = styled.div`
    background-color: hsl( 0deg 50% 50% / 1);
    flex: 1 1 344px;
    height: 370px;
    /* max-width: 344px; */
`;

export default ShoeCard;