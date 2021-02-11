import { useState } from 'react';
import { inputChangeHandler, deleteButtonHandler } from '../../utils/handlers';
import { StatusModal } from '../common/StatusModal';
import styled from 'styled-components';

export default function LabelModal({ topic, toggleModal, labelsGetter, publishHandler }) {
    const [labelsList, setLabels] = useState(topic.labels);
    const [label, setLabel] = useState('');

    const addLabelHandler = () => {
        if (!label.length) {
            StatusModal.fire({
                title: 'Enter label description!',
                icon: 'warning'
            });
            return;
        }
        setLabels(prevState => {
            const updated = [...prevState];
            updated.push({
                id: label,
                text: label
            });
            return updated;
        })
        publishHandler(label);
        setLabel(() => '');
    }

    return (
        <LabelModalWrapper>
            <CloseModal onClick={() => {
                labelsGetter(labelsList);
                toggleModal();
            }}>Close</CloseModal>
            <LabelModalContainer>
                <ListHeader>{topic.text}</ListHeader>
                {
                    !labelsList.length ?
                        <EmptyListWarning>Use form below to add a label</EmptyListWarning> :
                        <LabelsList>
                            {
                                labelsList.map(label => {
                                    return (
                                        <LabelsListItem key={label.text}>
                                            <span>{label.text}</span>
                                            <DeleteLabel
                                                id={label.id}
                                                onClick={event => {
                                                    deleteButtonHandler(event, labelsList, setLabels, null);
                                                    StatusModal.fire({
                                                        title: 'Label deleted!'
                                                    })
                                                }}
                                            >delete</DeleteLabel>
                                        </LabelsListItem>
                                    )
                                })
                            }
                        </LabelsList>
                }
                <LabelInput
                    value={label}
                    onChange={event => inputChangeHandler(event, setLabel)}
                />
                <PublishLabel onClick={addLabelHandler}>Add label</PublishLabel>
            </LabelModalContainer>
        </LabelModalWrapper>
    )
}

const LabelModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

const CloseModal = styled.p`
    width: 40%;
    text-align: right;
    text-decoration: underline;
    cursor: pointer;
`;

const LabelModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 25rem;
    min-width: 25rem;
    padding; 1rem 0rem;
    border: 1px solid black;
    border-radius: 0.3rem;
`;

const ListHeader = styled.h2``;

const EmptyListWarning = styled.h3``;

const LabelsList = styled.ul`
    min-height: 10rem;   
    max-height: 12rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    align-items: center;
    list-style: square;
    overflow-y: scroll;
`;

const LabelsListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    padding: 0.5rem;
`;

const DeleteLabel = styled.span.attrs(props => ({
    id: props.id
}))`
    text-decoration: underline;
    cursor: pointer;
`;

const LabelInput = styled.input.attrs(props => ({
    type: 'text',
    placeholder: 'Enter label description'
}))`
    width: 80%;
    padding: 1rem;
    border: none;
    border-radius: 0.3rem;
    font-size: 1.3rem;
`;

const PublishLabel = styled.button`
    padding: 0.5rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 0.3rem;
    background-color: black;
    color: white; 
    cursor: pointer;
`;

