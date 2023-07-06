import { useEffect, useState } from 'react';

const Planet = () => {
  const [searchKey, setSearchKey] = useState(null);
  const [planetData, setPlanetData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchPlanetData(value) {
    setLoading(true);
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${value}`
    );
    const data = await response.json();
    if (data) {
      setLoading(false);
    }
    setSearchData(data?.results);
  }

  const getSearchData = (value) => {
    setSearchKey(value);
    if (value?.length > 0) {
      searchPlanetData(value);
    }
  };

  return (
    <div>
      <div>Search for planets </div>
      {loading && <div style={{ color: 'blue' }}>Loading ...</div>}
      <div>
        <input
          id="search"
          type="text"
          placeholder="a"
          value={searchKey}
          onChange={(e) => getSearchData(e.target.value)}
        />
      </div>
      {/*
       * Replace the section below with the results of the search
       */}
      {searchKey?.length > 0 && searchData?.length > 0 && (
        <section>
          <header>
            <div className="col">Name</div>
            <div className="col">Population</div>
          </header>
          {searchKey?.length > 0 && searchData?.length > 0 && (
            <>
              {searchData.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="col">{item.name}</div>
                    <div title="200000" className="col">
                      {item.films.map((ele, i) => {
                        return '\u{1F468}';
                      })}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </section>
      )}

      <br />
      {searchKey?.length > 0 && searchData?.length === 0 && (
        <div className="error">No planet matching search term</div>
      )}
    </div>
  );
};

export default Planet;
