import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPosts = async () => {
  const res = await api.get("/posts");
  return res.status === 200 ? res.data : [];
};



//infinite Scroll

export const fetchUsers = async ({pageParam = 1}) => {
    const apiUrl = "https://api.github.com"
    const res = await axios.get(`${apiUrl}/users?per_page=12&page=${pageParam}`)
    return res.data
}