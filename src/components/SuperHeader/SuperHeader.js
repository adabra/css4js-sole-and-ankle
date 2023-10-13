import React from "react";
import styled from "styled-components/macro";
import Search from "../Search/Search";
import { COLORS } from "../../constants";

const SuperHeader = () => {
    return (
        <Wrapper>
            <MarketingMessage>
            Free shipping on domestic orders over 75$!
            </MarketingMessage>
            <Search></Search>
            <Help>Help</Help>
            <ShoppingBag>Shopping bag</ShoppingBag>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 40px;
    background-color: ${COLORS.gray[900]};
    color: ${COLORS.white};
    font-size: ${14 / 16}rem;

    display: flex;
    gap: 24px;
    padding: 12px 32px;
`;

const MarketingMessage = styled.p`
    margin-right: auto;
`;

const Help = styled.div``;

const ShoppingBag = styled.div``;


export default SuperHeader;