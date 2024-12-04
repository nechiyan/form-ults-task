// src/mocks/mockDB.js

export const users = [
    { id: 1, username: "navas", password: "navas", name: "Test User" },
    { id: 2, username: "johndoe", password: "password456", name: "John Doe" },
  ];
  
  export const getUserByUsername = (username) => {
    return users.find((user) => user.username === username);
  };
  