import styled from 'styled-components';
import MainLayout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import MediaCard from '../components/common/Card';

export default function Contacts() {

    return (
        <MainLayout>
            <ContactsContainer>
                <ContactForm />
                <MediaCard />
            </ContactsContainer>
        </MainLayout>
    )
}

const ContactsContainer = styled.section`
    min-height: 100%;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 2rem;
`;

const ContactsForm = styled.form`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    background-color: white;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const FormHeader = styled.h1`
    width: 100%;
    justify-self: flex-start;
    color: white;
`;




