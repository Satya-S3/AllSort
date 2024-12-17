import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BinarySearch.css';

const BinarySearch = () => {
      const [array, setArray] = useState([]);
      const [target, setTarget] = useState('');
      const [currentIndex, setCurrentIndex] = useState(null);
      const [low, setLow] = useState(null);
      const [high, setHigh] = useState(null);
      const [message, setMessage] = useState('');
      const generateArray = () => {
            const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)).sort((a, b) => a - b);
            setArray(newArray);
            setLow(null);
            setHigh(null);
            setCurrentIndex(null);
            setMessage('');
      };
      useEffect(() => {
            generateArray();
      }, []);


      const startSearch = () => {
            if (!target || isNaN(target)) {
                  setMessage('Please enter a valid number to search for.');
                  return;
            }

            let l = 0;
            let h = array.length - 1;
            let t = parseInt(target, 10);
            setTarget("");

            const searchStep = () => {
                  if (l > h) {
                        setMessage(`Target ${t} not found.`);
                        return;
                  }

                  const mid = Math.floor((l + h) / 2);
                  setLow(l);
                  setHigh(h);
                  setCurrentIndex(mid);

                  if (array[mid] === t) {
                        setMessage(`Target ${t} found at index ${mid}.`);
                        return;
                  } else if (array[mid] < t) {
                        l = mid + 1;
                  } else {
                        h = mid - 1;
                  }

                  setTimeout(searchStep, 1500);
            };

            searchStep();
      };

      return (
            <div className="container-fluid1 text-center">
                  <header>
                        <h1 className="text">
                              <span className="letter letter-1">S</span>
                              <span className="letter letter2">E</span>
                              <span className="letter letter-3">A</span>
                              <span className="letter letter-4">R</span>
                              <span className="letter letter-4">C</span>
                              <span className="letter letter-4">H</span>
                        </h1>
                  </header>
                  <div className="row justify-content-center align-items-center">
                        <div className="col-md-8 col-sm-12 mb-3">
                              <button id="create" className="btn btn-primary m-3" onClick={generateArray}>
                                    Generate Array
                              </button>

                              <input
                                    type="number"
                                    className="form-control d-inline w-50 m-3"
                                    placeholder="Enter target"
                                    value={target}
                                    onChange={(e) => setTarget(e.target.value)}
                                    onKeyDown={(e) => {
                                          if (e.key === "Enter") {
                                                startSearch();
                                          }
                                    }}
                              />
                              <button id="search" className="btn btn-success m-3" onClick={startSearch}>
                                    Start Search
                              </button>
                        </div>
                  </div>

                  <div className="mt-4">
                        <div className="array-container d-flex justify-content-center flex-wrap">
                              {array.map((value, index) => (
                                    <div key={index}
                                          className={`array-item p-3 m-2 border rounded justify-content-center text-center shadow transition-all ${index === currentIndex ? 'bg-warning text-dark scale-up' :
                                                index >= low && index <= high ? 'bg-info text-white' : 'bg-light'
                                                }`}>
                                          {value}
                                    </div>
                              ))}
                        </div>
                        <div className="mt-3 text-info">{message}</div>
                  </div>
            </div>
      );
};

export default BinarySearch;
