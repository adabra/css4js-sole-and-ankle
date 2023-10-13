import react from "react";
import styled from "styled-components/macro";
import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import ShoeGrid from "../ShoeGrid";
import { COLORS } from "../../constants";

const ShoeIndex = () => {
    return (
        <Wrapper>
            <SideBar>
                <Breadcrumbs />
                <CategoryList>
                    <Category>Lifestyle</Category>
                    <Category>Jordan</Category>
                    <Category>Running</Category>
                    <Category>Basketball</Category>
                    <Category>Training & Gym</Category>
                    <Category>Football</Category>
                    <Category>Skateboarding</Category>
                    <Category>American Football</Category>
                    <Category>Baseball</Category>
                    <Category>Golf</Category>
                    <Category>Tennis</Category>
                    <Category>Athletics</Category>
                    <Category>Walking</Category>
                </CategoryList>
            </SideBar>
            <MainShoeSection>
                <Header>
                    <Heading>Running</Heading>
                    <Select></Select>
                </Header>
                <ShoeGrid></ShoeGrid>
            </MainShoeSection>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    gap: 32px;
`;

const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
    flex: 0 0 248px;
`;

const CategoryList = styled.ul``;

const Category = styled.li``;


const MainShoeSection = styled.main`
    background-color: deeppink;
    flex: 1 0 0px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Heading = styled.h1`
    font-size: ${24/16}rem;
    color: ${COLORS.gray[900]};
    font-weight: 600;
    
`;

export default ShoeIndex;