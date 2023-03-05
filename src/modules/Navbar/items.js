import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'MyContacts',
    link: '/my-contacts',
  },
];

export default items;
