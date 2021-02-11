import styled from 'styled-components';
import { deleteButtonHandler } from '../../utils/handlers';
import Topic from '../Topic';
import { StatusModal } from '../common/StatusModal';

export default function TopicSectionContainer({ topics, getTopicsList }) {
    return (
        <TopicsSection>
            {
                !topics.length ?
                    <EmptyListWarning>Type topic name to start</EmptyListWarning> :
                    topics.map(topic => (
                        <Topic
                            topic={topic}
                            deleteTopic={event => {
                                deleteButtonHandler(event, [...topics], getTopicsList, 'list');
                                StatusModal.fire({
                                    title: 'Topic deleted!'
                                })
                            }
                            }
                            key={topic.text}
                        />
                    )
                    )
            }
        </TopicsSection>
    )
}

const TopicsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 2rem;
`;

const EmptyListWarning = styled.h2`
  font-size: 1.3rem;
  text-align: center;
`;