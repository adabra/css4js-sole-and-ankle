import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../../constants';
import SuperHeader from '../SuperHeader/SuperHeader';

const Header = () => {
    return (
        <Wrapper>
            <SuperHeader />
            <MainHeader>
                <CompanyLogo>Sole&Ankle</CompanyLogo>
                <NavBar>
                    <NavLink>SALE</NavLink>
                    <NavLink>NEW RELEASES</NavLink>
                    <NavLink>MEN</NavLink>
                    <NavLink>WOMEN</NavLink>
                    <NavLink>KIDS</NavLink>
                    <NavLink>COLLECTIONS</NavLink>
                </NavBar>
            </MainHeader>
        </Wrapper>
    );
};

const Wrapper = styled.header`
`;

const MainHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 48px;
    height: 72px;
    padding: 0 32px;
    border-bottom: 1px solid ${COLORS.gray[300]};
`;

const CompanyLogo = styled.h1`
    position: absolute;
    left: 32px;
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: center; 
    gap: 48px;

`;

const NavLink = styled.a``;


export default Header; 