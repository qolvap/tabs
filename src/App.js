import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { data } from './data.js';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>loading...loading..loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => (
            <div key={index} className='job-desc'>
              <FaAngleDoubleRight className='job-icon' />
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
      <button type="button" className="btn">
      <a href="https://www.linkedin.com/in/qolvap/" target="_blank" rel="noopener noreferrer">
    More Info
  </a>
      </button>
    </section>
  );
};

export default App;
