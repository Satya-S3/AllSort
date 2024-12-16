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
            <div className="container text-center mt-5">
                  <h1 className="mb-4">Binary Search Visualizer</h1>
                  <div className="row justify-content-center align-items-center">
                        <div className="col-md-8 col-sm-12 mb-3">
                              <button className="btn btn-primary m-2" onClick={generateArray}>Generate Array</button>
                              <input
                                    type="number"
                                    className="form-control d-inline w-50 m-2"
                                    placeholder="Enter target"
                                    value={target}
                                    onChange={(e) => setTarget(e.target.value)}
                              />
                              <button className="btn btn-success m-2" onClick={startSearch}>Start Search</button>
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
