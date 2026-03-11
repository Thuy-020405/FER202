
export const fetchAllUsers = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return await response.json();
};

export const fetchAllPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
  return await response.json();
};