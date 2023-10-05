import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSheCodesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let sheCodesApiKey = "1be70t3b32a048fab4oc2947a8669607";
    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheCodesApiKey}`;
    axios
      .get(sheCodesApiUrl, {
        headers: { Authorization: `Bearer${sheCodesApiKey}` },
      })
      .then(handleSheCodesResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search} className="section">
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="type a word that you are looking for..."
        />
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
