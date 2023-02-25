// import React, { useState } from 'react';

// export default function BlogStructure(props) {

//     const blogList = props.blogPostsResults.map((blogPostsResult, index) => {
//         const urlSeparator = " | "
//         const itemLink = "https://news.ycombinator.com/item?id="
//         const userLink = "https://news.ycombinator.com/user?id="
//         return (
//             <li key={index}>
//                 <div>
//                     <span><a href={itemLink + blogPostsResult.objectID}>{blogPostsResult.title}</a></span>
//                     <span><a href={blogPostsResult.url}>({blogPostsResult.url})</a></span>
//                 </div>
//                 <span>
//                     <a href={itemLink + blogPostsResult.objectID}>{blogPostsResult.points}</a>
//                     {urlSeparator}
//                     <a href={userLink + blogPostsResult.author}>{blogPostsResult.author}</a>
//                     {urlSeparator}
//                     <a href={itemLink + blogPostsResult.objectID}>{blogPostsResult.created_at}</a>
//                     {urlSeparator}
//                     <a href={itemLink + blogPostsResult.objectID}>{blogPostsResult.num_comments}</a>
//                 </span>
//             </li>
//         )
//     })

//     return <li>{BlogStructure}</li>
// }