import React from 'react';
import { Search } from 'lucide-react';
import styles from './SearchForm.module.css';

const SearchForm = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <div className={styles.fx}>
          <div>
            <input
              type="text"
              placeholder="Search ambassadors..."
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
          <div id="search-icon" className={styles.searchIcon}>
            <button>
              <Search size={20} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;