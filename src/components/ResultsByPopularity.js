import React, { useState } from 'react';

function ResultsByPopularity(props) {

    const blogPostsResult = props.blogPostsResult
    console.log("The results for popular in the ResultsByPopularity are:", blogPostsResult)

    const urlSeparator = " | "
    const itemLink = "https://news.ycombinator.com/item?id="
    const userLink = "https://news.ycombinator.com/user?id="
    return (
        <li>
            <div>
                <span><a href={itemLink + blogPostsResult.objectID}>{blogPostsResult.title}</a></span>
                <span><a href={blogPostsResult.url}>({blogPostsResult.url})</a></span>
            </div>
            <span>
                <a href={itemLink + blogPostsResult.objectID}>{blogPostsResult.points}</a>
                {urlSeparator}
                <a href={userLink + blogPostsResult.author}>{blogPostsResult.author}</a>
                {urlSeparator}
                <a href={itemLink + blogPostsResult.objectID}>{blogPostsResult.created_at}</a>
                {urlSeparator}
                <a href={itemLink + blogPostsResult.objectID}>{blogPostsResult.num_comments}</a>
            </span>
        </li>
    )








    // return <li>{results}</li>

    // return(
    //     <div className='blogresults stack-large'>
    //         <h2>TEST</h2>
    //             <ul role="list" className='blogresultslist' aria-labelledby='list-heading'>
    //                 {results.map((blogPostsResult, index) => {
    //                     const urlSeparator = " | "
    //                     const itemLink = "https://news.ycombinator.com/item?id="
    //                     const userLink = "https://news.ycombinator.com/user?id="
    //                     return (
    //                         <li key={index}>
    //                             <div>
    //                                 <span><a href={itemLink + blogPostsResult.objectID}>{blogPostsResult.title}</a></span>
    //                                 <span><a href={blogPostsResult.url}>({blogPostsResult.url})</a></span>
    //                             </div>
    //                             <span>
    //                                 <a href={itemLink + blogPostsResult.objectID}>{blogPostsResult.points}</a>
    //                                 {urlSeparator}
    //                                 <a href={userLink + blogPostsResult.author}>{blogPostsResult.author}</a>
    //                                 {urlSeparator}
    //                                 <a href={itemLink + blogPostsResult.objectID}>{blogPostsResult.created_at}</a>
    //                                 {urlSeparator}
    //                                 <a href={itemLink + blogPostsResult.objectID}>{blogPostsResult.num_comments}</a>
    //                             </span>
    //                         </li>
    //                     )
    //                 })}
    //             </ul>
    //         </div>
    // )
}

export default ResultsByPopularity;