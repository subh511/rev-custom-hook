
import { useEffect, useState } from "react";

function useDebounce(value,time){

  const [debouncedValue,setDebounceValue] = useState(value);
  useEffect(()=>{
   let timeOutNUmber =  setTimeout(()=>{
      setDebounceValue(value)
    },time)
    return ()=>{
      clearTimeout(timeOutNUmber)
    }
  },[value])
return debouncedValue;
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  //fetching data from backend through axios or whatever;
  // useEffect(()=>{
  //   axios.get(``)
  // },[debouncedValue])

  return (
    <div>
    your value is :- {debouncedValue}
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    </div>
  );
};

export default SearchBar;