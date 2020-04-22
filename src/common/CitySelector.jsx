import React, { useEffect, useState, useMemo, memo } from "react";
import "./CitySelector.css";
import classnames from "classnames";
import PropTypes from "prop-types";

const CityItem = memo(function(props) {
  const { name, onSelect } = props;
  return (
      <li className="city-li" onClick={() => onSelect(name)}>
          {name}
      </li>
  );
});

CityItem.ProtoTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.string.isRequired
};

const CitySelect = memo(function(props) {
  const { title, cities = [], onSelect } = props;
  return (
      <ul className="city-ul">
          <li className="city-li">{title}</li>
          {cities.map(city => {
        return (
            <CityItem key={city.name} name={city.name} onSelect={onSelect} />
        );
      })}
      </ul>
  );
});

CitySelect.ProtoTypes = {
  title: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

const CityList = memo(function(props) {
  const { sections, onSelect } = props;
  return (
      <div className="city-list">
          <div className="city-cate">
              {sections.map(section => {
          return (
              <CitySelect
              key={section.title}
              title={section.title}
              cities={section.citys}
              onSelect={onSelect}
            />
          );
        })}
          </div>
      </div>
  );
});

CityList.ProtoTypes = {
  sections: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};

const CitySelector = memo(function(props) {
  const { show, cityData, isLoading, onBack, fetchCityData, onSelect } = props;
  const [searchKey, setSarchKey] = useState("");
  const key = useMemo(() => searchKey.trim(), [searchKey]);
  useEffect(() => {
    if (!show || cityData || isLoading) return;
    fetchCityData();
  }, [show, cityData, isLoading]);

  const outputCitySections = () => {
    if (isLoading) {
      return <div>loading</div>;
    }
    if (cityData) {
      return <CityList sections={cityData.cityList} onSelect={onSelect} />;
    }
    return <div>error</div>;
  };
  return (
      <div className={classnames("city-selector", { hidden: !show })}>
          <div className="city-search">
              <div className="search-back" onClick={() => onBack()}>
                  <svg width="42" height="42">
                      <polyline
              points="25,13 16,21 25,29"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
                  </svg>
              </div>
              <div className="search-input-wrapper">
                  <input
            type="text"
            value={searchKey}
            className="search-input"
            placeholder="城市·车站的中文或拼音"
            onChange={e => setSarchKey(e.target.value)}
          />
              </div>
              <i
          onClick={() => setSarchKey("")}
          className={classnames("search-clean", {
            hidden: key.length === 0
          })}
        >
          &#xf063;
              </i>
          </div>
          {outputCitySections()}
      </div>
  );
});
CitySelector.ProtoTypes = {
  show: PropTypes.object.isRequired,
  cityData: PropTypes.object,
  isLoading: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
  fetchCityData: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};
export default CitySelector;
