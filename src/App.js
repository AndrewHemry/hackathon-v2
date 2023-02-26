import React, { useState } from 'react'
import BlogResults from './components/BlogResults';
import BlogResults2 from './components/BlogResults2';
import FilterButton from './components/FilterButton';
import './App.css';

const FILTER_MAP = {
  Popular: (filterPopularity_vs_Date) => filterPopularity_vs_Date,
  Date: (filterPopularity_vs_Date) => !filterPopularity_vs_Date
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

function App(props) {

  const [filter, setFilter] = useState(props.filterPopularity_vs_Date)

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
    />
  ))

  if(1 == 2) {
    return(
      <div className='App'>
        <h1>Blog Results</h1>
        <div>
          {filterList}
        </div>
        <BlogResults />
      </div>
    )
  } else {
    return(
      <div className='App'>
        <h1>Blog Results</h1>
        <div>
          {filterList}
        </div>
        <BlogResults2 />
      </div>
    )
  }

  // return (
  //   <div className="App">
  //     <h1>Blog Results</h1>
  //     <div className='filters btn-group'>
  //         {filterList}
  //     </div>
  //     {/* <BlogResults /> */}
  //     <BlogResults2 />
  //   </div>
  // );
}

export default App;
