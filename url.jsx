import React, { useEffect, useState } from "react";

const Url=()=>
{
    const link="https://jsonplaceholder.typicode.com/posts";

  const [show, setShow] = useState([]);

    const showData=async (apiCall)=>{

        const response=await fetch(apiCall);
        console.log(response);
        const data =await response.json();
        console.log(data); 
        setShow(data);
    }
    useEffect(function()
    {
    showData(link);
},[]);

    return(
        <div>
    <h2>Posts</h2>

    {show.map((post) => (
      <div key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <hr />
      </div>
    ))}
  </div>
    )
}
export default Url;