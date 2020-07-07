// import React, { useState, useEffect, useRef } from "react";
// import { movieApi } from "../../Api/api";


// export const Search = () => {
//   const [searchState, setSearchState] = useState([]);
//   const inputRef = useRef();

//   const inputState = state.inputState;
//   const searchMovie = searchState;

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   const enterKeyword = async (e) => {
//     if (e.keyCode === 13) {
//       const keyword = e.target.value;
//       inputRef.current.value = "";
//       const testSearch = await movieApi.getMovies(keyword);
//       await setSearchState(testSearch.data.results);
//     }
//   };

//   const changeKeyword = (e) => {
//     changeInput(e.target.value);
//   };

//   const keywords = inputState.keyword === undefined ? [] : inputState.keyword;

//   console.log(keywords);

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchInputState}

//         className="boxOfficeSearchBar"
//         placeholder="영화명을 입력해주세요."
//         title="영화 검색"
//       />
//     </div>
//   )
// }
