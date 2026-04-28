import './movies.css';

import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import SearchBar from '../general/SearchBar';
import Tag from './Tag';

function Filter({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) {
  const allGenres = [
    'action', 'drama', 'comedy', 'biography', 'romance',
    'thriller', 'war', 'history', 'sport', 'sci-fi',
    'documentary', 'crime', 'fantasy',
  ];

  return (
    <div>
      <SearchBar title={title} setTitle={setTitle} />

      <Input label="Min Year" value={minYear} setValue={setMinYear} />
      <Input label="Max Year" value={maxYear} setValue={setMaxYear} />

      <SelectInput
        label="Sort"
        value={sort}
        setValue={setSort}
        options={[
          { value: 'latest', label: 'Latest' },
          { value: 'oldest', label: 'Oldest' },
          { value: 'highestrated', label: 'Highest Rated' },
          { value: 'lowestrated', label: 'Lowest Rated' },
        ]}
      />

      <ul>
        {allGenres.map((genre) => (
          <Tag
            key={genre}
            genre={genre}
            filter={true}
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </ul>
    </div>
  );
}

export default Filter;
