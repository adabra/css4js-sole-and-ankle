import React from "react";
import styled from "styled-components/macro";
import { COLORS } from "../../constants";

const Select = () => {
    return (
        <Wrapper>Sort: Newest Releases</Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: ${COLORS.gray[100]};
    `;

export default Select;