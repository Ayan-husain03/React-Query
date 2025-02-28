import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { fetchUsers } from "../api/dataApi";

const Infinite = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: ({pageParam = 1}) => fetchUsers(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 12 ? allPages.length + 1 : undefined;
    },
  });

//   const handleScroll = () => {
//     const bottom =
//       window.innerHeight + window.scrollY >=
//       document.documentElement.scrollHeight - 12;
//     if (bottom && hasNextPage) {
//       fetchNextPage();
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [hasNextPage, fetchNextPage]);

  console.log(data);
  return (
    <div className="p-5">
      <h1 className="text-center text-5xl py-4 uppercase text-indigo-800">Infinite scroll</h1>
      {data?.pages.map((page, index) => (
        <ul
          key={index}
          className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 rounded-lg overflow-hidden gap-5"
        >
          {page.map((user) => (
            <li key={user.id} className="">
              <figure className="">
                <img
                  src={user.avatar_url}
                  alt=""
                  className="w-full rounded-xl shadow-lg"
                />
              </figure>
            </li>
          ))}
        </ul>
      ))}
      <div>
        <div className="text-center text-4xl py-5 animate-pulse">Loading....</div>
      </div>
    </div>
  );
};

export default Infinite;
