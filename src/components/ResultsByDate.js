import React, { useState } from 'react';

function ResultsByDate(props) {

    const blogPostsResult = props.blogPostsResultDate
    console.log("The results for popular in the ResultsByDate are:", blogPostsResult)

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
}

export default ResultsByDate;