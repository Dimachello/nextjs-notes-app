import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/common/Loader';
import MainLayout from '../components/Layout';
import { StatusModal } from '../components/common/StatusModal';
import InputSection from '../components/InputSection';
import TopicsSection from '../components/TopicSection';
import topicInterface from '../interfaces/topicInterface';

export default function Home() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('list') && JSON.parse(localStorage.getItem('list')).topics.length) {
      const topics: topicInterface[] = JSON.parse(localStorage.getItem('list')).topics;
      setTopics(topics);
    } else {
      setLoading(true);
      axios('http://localhost:4200/topics')
        .then(response => {
          if (response.status === 200) {
            const topics: topicInterface[] = response.data;
            return topics;
          } else {
            throw new Error('Something went wrong!');
          }
        })
        .then(data => {
          setTopics(data);
          setLoading(false);
        })
        .catch(error => {
          if (error) {
            StatusModal.fire({
              title: error.message,
              icon: 'warning',
              position: 'center',
              showConfirmButton: true
            })
            setLoading(false);
          }
        })
    }
  }, []);

  const getTopicsList = list => {
    setTopics(list);
  }

  return (
    <MainLayout>
      <InputSection topicsList={topics} getTopicsList={getTopicsList} />
      {
        isLoading ? <Loader /> :
          <TopicsSection topics={topics} getTopicsList={getTopicsList} />
      }
    </MainLayout>
  )
}