import React, { Component } from 'react';
import axios from 'axios';
import FilterButton from './FilterButton'
import ResultsByDate from './ResultsByDate';

class BlogResults2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPostResultsDate: [],
            // Add Toggle State - Default to true, which will display Popular - False will filter to Date
            filterPopularity_vs_Date: true
        }

        console.log("My props are:", this.state.blogPostsResultsPopular)
    }

    componentDidMount() {
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
    }

    render() {
        return(
            <div className='blogresults stack-large'>
                <ul role="list" className='blogresultslist' aria-labelledby='list-heading'>
                    {this.state.blogPostResultsDate.map((blogPostsResultDate, index) => {
                        return(
                            <li>
                                <ResultsByDate blogPostsResultDate={blogPostsResultDate} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default BlogResults2;