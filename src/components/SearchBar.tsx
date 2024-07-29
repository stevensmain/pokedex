import React from "react";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { setSearchTerm } from "../feature/pokemonSlice";
import { SearchIcon } from "./Icons";

export default function SearchBar() {
  const dispatch = useAppDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="flex h-9 w-full items-center gap-3 overflow-hidden rounded-full border-2 border-slate-500 px-2 focus-within:border-gray-600 hover:border-sky-600 dark:border-slate-300 dark:focus-within:border-gray-400 dark:hover:border-sky-400 sm:border-slate-300 sm:dark:border-slate-700">
      <SearchIcon className="h-5 w-5 text-sky-600" />

      <label htmlFor="search_bar" aria-hidden="true" className="hidden">
        Search Bar
      </label>
      <input
        aria-keyshortcuts="S"
        aria-label="Search Bar"
        tabIndex={0}
        type="text"
        id="search_bar"
        className="h-full w-full bg-transparent outline-none"
        onChange={handleSearchChange}
      />
    </div>
  );
}
