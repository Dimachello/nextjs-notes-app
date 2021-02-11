import labelInterface from './labelInterface';

export default interface topicInterface {
    id: number | string,
    createdAt: Date,
    text: string,
    labels: labelInterface[]
}