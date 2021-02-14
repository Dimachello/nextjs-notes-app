import { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { StatusModal } from '../common/StatusModal';

import { inputChangeHandler } from '../../utils/handlers';
import { MainSecondary } from '../../constants/stylesConstants';

export default function InputSectionContainer({ topicsList, getTopicsList }) {
  const [input, setInput] = useState('');

  const addButtonHandler = () => {

    if (!input.length) {
      StatusModal.fire({
        title: 'Topic name is empty',
        icon: 'warning'
      })
      return
    }

    const splitted = input.split('');
    const filtered = splitted.filter((char) => char !== " ");

    if (filtered.length === 0) {
      StatusModal.fire({
        title: 'Topic name is empty'
      })
      return;
    }
    const date = moment().format("D:MM:YY MMMM")
    const updated = [...topicsList];
    const topic = {
      id: topicsList.length,
      createdAt: date,
      text: input,
      labels: []
    };

    updated.push(topic);

    localStorage.setItem('list', JSON.stringify({ topics: updated }));
    getTopicsList(updated);
    setInput(() => '');
    StatusModal.fire({
      title: 'Topic added!'
    })
  }

  const keyPressHandler = event => {
    if (event.key === 'Enter') {
      addButtonHandler();
    }
  }

  return (
    <InputSection>
      <InputField
        value={input}
        onChange={event => inputChangeHandler(event, setInput)}
        onKeyPress={keyPressHandler}
      />
      <AddButton onClick={addButtonHandler}>Add topic</AddButton>
    </InputSection>
  )
}

const InputSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputField = styled.input.attrs(props => ({
  type: 'text',
  placeholder: 'Enter topic name'
}))`
  padding: 0.5rem;
  border: 1px solid transparent;
  font-size: 2rem;
  border-bottom: 1px;
  border-style: solid;
  border-color: ${MainSecondary};
  outline: none;
`;

const AddButton = styled.button`
  margin-left: 1rem;
  padding: 0.8rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.3rem;
  background-color: rgb(222, 127, 82);
  color: white;
  outline: none;
`;