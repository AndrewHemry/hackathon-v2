import React, { Component } from 'react';
import axios from 'axios';
import FilterButton from './FilterButton'
import BlogStructure from './BlogStructure';
import { nanoid } from 'nanoid' // Need to import this file

// Dipslay the results

// Build the 2 buttons

// Filter logic to display ONE of the results based upon the state

class BlogResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPostsResultsPopular: [],
            blogPostResultsDate: [],
            // Add Toggle State - Default to true, which will display Popular - False will filter to Date
            filterPopularity_vs_Date: true
        }
    }

    componentDidMount() {
        // FOR THE POPULARITY API RESULTS
        axios.get('https://hn.algolia.com/api/v1/search?tags=story')
        .then(res => {
            const blogPostsResultsPopular = res.data.hits
            this.setState({blogPostsResultsPopular})
            console.log("The results are in for popularity:", blogPostsResultsPopular)
        })

        // FOR THE DATE API RESULTS
        axios.get('http://hn.algolia.com/api/v1/search_by_date?tags=story')
        .then(res => {
            const blogPostResultsDate = res.data.hits
            this.setState({blogPostResultsDate})
            console.log("The results are in for date:", blogPostResultsDate)
        })
    }

    componentDidUpdate() {
        console.log("It did update.")
        console.log("The current state of the filter:", this.state)
    }

    render() {
        return(
            <div className='blogresults stack-large'>
                <ul role="list" className='blogresultslist' aria-labelledby='list-heading'>
                    {this.state.blogPostsResultsPopular.map((blogPostsResult, index) => {
                        const urlSeparator = " | "
                        const itemLink = "https://news.ycombinator.com/item?id="
                        const userLink = "https://news.ycombinator.com/user?id="
                        return (
                            <li key={index}>
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
                    })}
                    {/* {BlogStructure} */}
                </ul>
            </div>
        )
    }
}

export default BlogResults