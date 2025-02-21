export default defineEventHandler(() => {
  return [
    {
      id: 1,
      user: {
        id: 1,
        username: "bogdan",
        avatar: "https://xsgames.co/randomusers/assets/avatars/male/19.jpg",
        name: "Bogdan",
      },
      content: "Це тестовий пост!",
      likes: 5,
      createdAt: "2025-02-20T12:00:00Z",
      comments: [
        {
          id: 1,
          user: {
            id: 2,
            username: "jane",
            avatar:
              "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
            name: "Jane",
          },
          text: "Гарний пост!",
          createdAt: "2025-02-20T12:10:00Z",
          replies: [
            {
              id: 2,
              user: {
                id: 3,
                username: "mike",
                avatar:
                  "https://xsgames.co/randomusers/assets/avatars/male/9.jpg",
                name: "Mike",
              },
              text: "Погоджуюсь!",
              createdAt: "2025-02-20T12:15:00Z",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      user: {
        id: 2,
        username: "jane",
        avatar: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
        name: "Jane",
      },
      content: "Люблю Nuxt 3 💚",
      likes: 12,
      createdAt: "2025-02-19T15:30:00Z",
      comments: [],
    },
    {
      id: 3,
      user: {
        id: 3,
        username: "mike",
        avatar: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg",
        name: "Mike",
      },
      content: "Vue 3 Composition API – топ!",
      likes: 8,
      createdAt: "2025-02-18T09:00:00Z",
      comments: [],
    },
    {
      id: 4,
      user: {
        id: 4,
        username: "alice",
        avatar: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
        name: "Alice",
      },
      content: "Я вчусь робити пости як у Threads 😄",
      likes: 7,
      createdAt: "2025-02-17T18:45:00Z",
      comments: [],
    },
    {
      id: 5,
      user: {
        id: 5,
        username: "john",
        avatar: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
        name: "John",
      },
      content: "Працюю над новим проєктом 🚀",
      likes: 15,
      createdAt: "2025-02-16T14:20:00Z",
      comments: [
        {
          id: 3,
          user: {
            id: 1,
            username: "bogdan",
            avatar: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
            name: "Bogdan",
          },
          text: "Цікаво, розкажеш більше?",
          createdAt: "2025-02-16T15:00:00Z",
          replies: [],
        },
      ],
    },
    {
      id: 6,
      user: {
        id: 5,
        username: "john",
        avatar: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
        name: "John",
      },
      content: "Працюю над новим проєктом 🚀",
      likes: 15,
      createdAt: "2025-02-16T14:20:00Z",
      comments: [
        {
          id: 3,
          user: {
            id: 1,
            username: "bogdan",
            avatar: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
            name: "Bogdan",
          },
          text: "Цікаво, розкажеш більше?",
          createdAt: "2025-02-16T15:00:00Z",
          replies: [],
        },
      ],
    },
    {
      id: 7,
      user: {
        id: 5,
        username: "john",
        avatar: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
        name: "John",
      },
      content: "Працюю над новим проєктом 🚀",
      likes: 15,
      createdAt: "2025-02-16T14:20:00Z",
      comments: [
        {
          id: 3,
          user: {
            id: 1,
            username: "bogdan",
            avatar: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
            name: "Bogdan",
          },
          text: "Цікаво, розкажеш більше?",
          createdAt: "2025-02-16T15:00:00Z",
          replies: [],
        },
      ],
    },
    {
      id: 8,
      user: {
        id: 5,
        username: "john",
        avatar: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
        name: "John",
      },
      content: "Працюю над новим проєктом 🚀",
      likes: 15,
      createdAt: "2025-02-16T14:20:00Z",
      comments: [
        {
          id: 3,
          user: {
            id: 1,
            username: "bogdan",
            avatar: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
            name: "Bogdan",
          },
          text: "Цікаво, розкажеш більше?",
          createdAt: "2025-02-16T15:00:00Z",
          replies: [],
        },
      ],
    },
    {
      id: 9,
      user: {
        id: 5,
        username: "john",
        avatar: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
        name: "John",
      },
      content: "Працюю над новим проєктом 🚀",
      likes: 15,
      createdAt: "2025-02-16T14:20:00Z",
      comments: [
        {
          id: 3,
          user: {
            id: 1,
            username: "bogdan",
            avatar: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
            name: "Bogdan",
          },
          text: "Цікаво, розкажеш більше?",
          createdAt: "2025-02-16T15:00:00Z",
          replies: [],
        },
      ],
    },
  ];
});
