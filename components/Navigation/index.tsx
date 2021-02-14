import Link from 'next/link';
import styled from 'styled-components';
import { NavPrimary } from '../../constants/stylesConstants';

export default function Navigation() {
    return (
        <NavigationContainer>
            <NavLinks>
                <NavLink>
                    <Link href='/'>
                        <LinkAnchor>Main</LinkAnchor>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link href='/contacts'>
                        <LinkAnchor>Contacts</LinkAnchor>
                    </Link>
                </NavLink>
            </NavLinks>
        </NavigationContainer>
    )
}

const NavigationContainer = styled.nav`
    flex-basis: 10%;
    padding: 1rem;
    background-color: ${NavPrimary};
`;

const NavLinks = styled.ul`
    min-height: inherit;
    display: flex;
    align-items: center;
    list-style: none;
`;

const NavLink = styled.li`
    padding: 0rem 1rem;
    font-size: 1.5rem;
    color: white;
`;

const LinkAnchor = styled.a`
    color: white;
    text-decoration: none;
    cursor: pointer;
`;