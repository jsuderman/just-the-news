import React, { useState, useEffect } from 'react';
import "./Search.css";

function Search() {
    const [requests, setRequests] = useState([])


    

    useEffect(() => {
        const url = 'http://newsapi.org/v2/top-headlines?' +
          'sources=fox-news&' +
          'apiKey=6901dfdd8a4a418ca4357036ec8e13ad';
        const req = new Request(url);

          fetch(req)
              .then(response => {
                  console.log(response.json());
              })
              .then(data => setRequests(data))
        // fetch(url)
        // .then(response => response.json())
        // .then(data => setRequests(data.results));
        
    }, []);

    return (
        <div className="search">
            <div className="search__input">
                    <input type="search" />
                    <button className="search__button">The News</button>
            </div>
            {/* <div>
                {requests.map(request => (
                    <p request={request} key={request.id} /> 
                       
                ))}
            </div> */}
        </div>

    )
}

export default Search
