import React from "react";
import styled from "styled-components/macro";
import { COLORS } from "../../constants";

const Breadcrumbs = () => {
    return (
        <Wrapper>
            <Breadcrumb>Home</Breadcrumb>
            <Breadcrumb>Sale</Breadcrumb>
            <Breadcrumb>Shoes</Breadcrumb>
        </Wrapper>
    );
};

const Wrapper = styled.ol`
    display: flex;
`;

const Breadcrumb = styled.li`
    
    &:before {
        content: '/';
        padding-left: 4px;
        padding-right: 4px;
        color: ${COLORS.gray[300]};
    }

    &:first-of-type:before {
        content: '';
        padding-left: 0;
        padding-right: 0;
    }
`;

export default Breadcrumbs;