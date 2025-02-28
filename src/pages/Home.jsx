import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/dataApi";

export const Home = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  if (isLoading)
    return <div className="text-center text-3xl my-28">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-3xl my-28">
        chutiye sahi se code likhle
      </div>
    );
  // handle page
  const handlePage = (page) => {
    if (page >= 1 && page <= data.length / 10) {
      setPage(page);
    }
  };
  return (
    <div className="p-5">
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {data.slice(page * 10 - 10, page * 10).map((item) => (
          <li className="shadow-2xl border p-5 rounded-lg" key={item.id}>
            <p className="text-xl font-semibold">Title : {item.title}</p>
            <p className="text-blue-800">Body : {item.body}</p>
          </li>
        ))}
      </ul>
      <div className="mx-auto flex gap-3 justify-center items-center p-5">
        <button
          className={`bg-blue-700 px-5 text-white py-2 ${
            page <= 1 ? "pointer-events-none opacity-0" : ""
          }`}
          onClick={() => setPage(page - 1)}
        >
          prev
        </button>
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className={`p-2 cursor-pointer px-4 border ${
              page === i + 1 ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => handlePage(i + 1)}
          >
            {i + 1}
          </span>
        ))}
        <button
          className={`bg-blue-700 px-5 text-white py-2 ${
            page >= data.length / 10 ? "pointer-events-none opacity-0" : ""
          }`}
          onClick={() => setPage(page + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};
