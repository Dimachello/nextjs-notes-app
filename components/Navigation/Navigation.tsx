import styled from 'styled-components';

export default function Navigation() {
    return (
        <NavigationContainer>
            <NavLinks>
                <NavLink>
                    Menu
                </NavLink>
            </NavLinks>
        </NavigationContainer>
    )
}

const NavigationContainer = styled.nav`
    flex-basis: 10%;
    padding: 1rem;
    background-color: rgb(250, 202, 70);
`;

const NavLinks = styled.ul`
    min-height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`;

const NavLink = styled.li`
    font-size: 1.5rem;
    color: white;
`;