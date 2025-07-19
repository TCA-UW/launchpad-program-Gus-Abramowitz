import React from 'react';

function FilterButtons({ filter, setFilter }) {
  return (
    <div className="filter-buttons">
      <button
        className={filter === 'All' ? 'active-filter' : ''}
        onClick={() => setFilter('All')}
      >
        All
      </button>
      <button
        className={filter === 'Active' ? 'active-filter' : ''}
        onClick={() => setFilter('Active')}
      >
        Active
      </button>
      <button
        className={filter === 'Completed' ? 'active-filter' : ''}
        onClick={() => setFilter('Completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
