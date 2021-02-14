import Headers from '../common/Headers';
import Navigation from '../Navigation';
import styled from 'styled-components';

export default function MainLayout({ children, title = 'Next-notes | App' }) {
    return (
        <>
            <Headers title={title} />
            <Navigation />
            <MainContainer>
                {children}
            </MainContainer>
        </>
    )
}

const MainContainer = styled.main`
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

