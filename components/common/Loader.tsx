import styled from 'styled-components';
import Loader from 'react-loader-spinner';

export default function () {
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

// const LoaderStatus = styled.h2``;
