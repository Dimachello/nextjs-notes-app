import styled from 'styled-components';
import Loader from 'react-loader-spinner';

export default function MyLoader() {
    return (
        <LoaderWrapper>
            <Loader type="Grid" color="#00BFFF" height={30} width={30} />
        </LoaderWrapper>
    )
}

const LoaderWrapper = styled.div`
    padding-top: 3rem; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

