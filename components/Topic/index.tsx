import { useState } from 'react';
import styled from 'styled-components';
import { toggleModalHandler } from '../../utils/handlers';
import LabelModal from '../LabelModal';
import { StatusModal } from '../common/StatusModal';
import { MainSecondary } from '../../constants/stylesConstants';

export default function TopicModal({ topic, deleteTopic }) {
    const [topicObj, setTopic] = useState(topic);
    const [showModal, setModal] = useState(false);

    const getCurrentLabels = updated => {
        const updatedTopic = {
            ...topic,
            labels: updated
        };

        setTopic(updatedTopic);
    }

    const updateLabelsHandler = label => {
        const labels = [...topicObj.labels];
        labels.push({
            id: label,
            text: label
        });
        StatusModal.fire({
            title: 'Label added!'
        })
        setTopic(prevState => {
            return {
                ...prevState,
                labels
            }
        });
    }

    return (
        <>
            <TopicWrapper>
                <TopicContainer
                    onClick={() => toggleModalHandler(setModal)}
                >
                    <TopicHeader>
                        {topicObj.text}
                    </TopicHeader>
                    {
                        !topicObj.labels.length ?
                            null : <LabelsContainer>
                                {
                                    topicObj.labels.map(label => {
                                        return (
                                            <Label key={label.id}>- {label.text}</Label>
                                        )
                                    })
                                }
                            </LabelsContainer>
                    }
                    <TimeStamp>
                        {topicObj.createdAt}
                    </TimeStamp>
                </TopicContainer>
                <Controls>
                    <DeleteTopic
                        id={topicObj.id}
                        onClick={deleteTopic}
                    >Delete topic</DeleteTopic>
                </Controls>
            </TopicWrapper>
            {
                showModal ? <LabelModal
                    topic={topicObj}
                    toggleModal={() => toggleModalHandler(setModal)}
                    labelsGetter={getCurrentLabels}
                    publishHandler={updateLabelsHandler}
                /> : null
            }
        </>
    )
}

const TopicWrapper = styled.div`
    flex-basis: 30%;
    padding: 1rem;
    cursor: pointer;
`;

const TopicContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 1rem;
    border: 1px;
    border-style: solid;
    border-color: ${MainSecondary};
    border-radius: 0.3rem;
`;

const TopicHeader = styled.h3`
    width: 100%;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid black;
    font-size: 1.5rem;
`;

const Controls = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const DeleteTopic = styled.button.attrs(props => {
    id: props.id
})`
    padding: 0.3rem;
    border: none;
    background-color: black;
    color: white;
    font-size: 1.2rem;
    border-radius: 0.3rem;
    cursor: pointer;
`;

const LabelsContainer = styled.div`
    width: 100%;
    margin: 0.5rem 0rem;
    padding-top: 1rem;
    max-height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    overflow-y: scroll;
`;

const Label = styled.p`
    padding: 0.2rem;
    font-size: 1.2rem;
`;

const TimeStamp = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;