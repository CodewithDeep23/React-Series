import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

function Github() {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/CodewithDeep23")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);
  return (
    <div className="text-3xl bg-gray-700 text-white text-center p-4 m-5">
      Github Followers: {data.followers}
      <div className="flex text-2xl gap-4">
        <Link to="https://github.com/CodewithDeep23" target="_blank">
      <img className="rounded-lg" src={data.avatar_url} alt="github image" width={200} />
      </Link>
      Public Repo: {data.public_repos}
      </div>
    </div>
  );
}

export default Github;

// Optimize way to fetch api: useLoaderData()

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/CodewithDeep23')
    return response.json()
}