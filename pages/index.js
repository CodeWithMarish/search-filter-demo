import { useState, useEffect } from "react";
import Search from "../components/Search";

const data = [
  "Create a NEWS App using Next JS and React Query",
  "Regular Expression (Regex) Essentials for Developers",
  "How to create a contact form in Next JS and Firebase?",
  "Build PWA (Progressive Web App) with Next JS under 1 minute",
  "Important Meta Tags that you should have on your website",
  "How to create a responsive navbar in NEXT JS?",
  "Create a Tic Tac Toe Game using NEXT JS",
  "How to add push notification in a Next/React JS App?",
  "Newsletter Subscription using NEXT JS and Mailchimp API",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState({
    data: [],
    isSearch: false,
    resultFound: false,
  });

  const debounce = (func, wait) => {
    let timerId;
    return (...args) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, wait);
    };
  };

  const filterData = () => {
    let fData = [];
    let resultFound = false;
    if (search) {
      fData = [...data.filter((d) => d.toLowerCase().indexOf(search) != -1)];
      if (fData.length > 0) {
        resultFound = true;
      }
    }
    setFilteredData({
      ...fData,
      data: [...fData],
      isSearch: search.trim().length > 0,
      resultFound: resultFound,
    });
  };

  useEffect(() => {
    filterData();
  }, [search]);

  return (
    <div className="container">
      <Search
        handleChange={debounce((v) => {
          setSearch(v);
        }, 2000)}
        filteredData={filteredData}
      />
    </div>
  );
}
