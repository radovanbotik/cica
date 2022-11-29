import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalFilterContext } from "../context/FilterContext";

export default function ViewToggle() {
  const {
    filtered_products,
    grid_view,
    setGridView,
    setListView,
    setSort,
    sort_by,
  } = useGlobalFilterContext();

  // useEffect(() => {}, [select]);
  return (
    <Control>
      <div className="toggle">
        <Icon className={grid_view && "active"} onClick={setGridView}>
          <span className="material-symbols-outlined icon ">grid_view</span>
        </Icon>
        <Icon className={!grid_view && "active"} onClick={setListView}>
          <span className="material-symbols-outlined icon">list</span>
        </Icon>
      </div>
      <span>
        {filtered_products.length}{" "}
        {filtered_products.length > 1 ? "products shown" : "product shown"}
      </span>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          onChange={e => setSort(e)}
          value={sort_by}
        >
          <option value="price-lowest-to-highest">no money big money</option>
          <option value="price-highest-to-lowest">big money no money</option>
          <option value="name-AZ">alphabet from the start</option>
          <option value="name-ZA">alphabet from an end</option>
        </select>
      </form>
    </Control>
  );
}

const Control = styled.div`
  background-color: var(--bg-small);
  padding: var(--vspace-3);
  margin-bottom: 1ex;
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  gap: 1ex;
  text-transform: uppercase;
  .toggle {
    display: flex;
    align-items: center;
    gap: 1ex;
  }
  hr {
    height: 4px;
    flex-grow: 1;
    border-width: 0;
    /* color: gray; */
    background-color: var(--blue);
  }
  form {
    display: flex;
    gap: var(--vspace-3);
    align-self: center;
    select {
      text-transform: uppercase;
    }
  }
`;
const Icon = styled.div`
  cursor: pointer;
  background-color: var(--buttons);
  color: var(--bg-small);
  display: grid;
  place-items: center;
  /* border: 1px solid var(--purple); */
  .icon {
    color: var(--blue);
    padding: 0.25ex;
  }
  &.active .icon {
    color: var(--grey);
    background-color: var(--blue);
  }
`;
