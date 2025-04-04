import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../redux/productSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const applyFilters = () => {
    dispatch(filterProducts({ category, price, search }));
  };

  return (
    <div className="sidebar">
      <h2>Filters</h2>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <select
        multiple
        onChange={(e) =>
          setCategory([...e.target.selectedOptions].map((o) => o.value))
        }
      >
        <option value="Men's cloth">Men's Cloth</option>
        <option value="Women's cloth">Women's Cloth</option>
        <option value="Jewellery">Jewellery</option>
        <option value="Electronics">Electronics</option>
      </select>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Sidebar;
