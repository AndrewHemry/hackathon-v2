import React, { useState } from 'react'
import BlogResults from './components/BlogResults';
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

  return (
    <div className="App">
      <h1>Blog Results</h1>
      <div className='filters btn-group'>
          {/* <FilterButton /> */}
          {filterList}
      </div>
      <BlogResults />
    </div>
  );
}

export default App;
