import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import '../App.css';
import bubble from './bubble';
import quick from './quick';
import insertion from './insertion';
import selection from './selection';
import merge from './merge';
import { Navigate, useNavigate } from 'react-router-dom';

import { useRef } from 'react';


const delay = (speed) => 320 - speed;

function Home() {
  const navigate = useNavigate();
  const [arraySize, setArraySize] = useState(60);
  const [array, setArray] = useState([]);
  const [currSpeed, setCurrSpeed] = useState(60);
  const speedRef = useRef(currSpeed);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    speedRef.current = currSpeed;
  }, [currSpeed]);

  useEffect(() => {
    const setResponsiveArraySize = () => {
      if (window.innerWidth < 768) {
        setArraySize(25);
      } else {
        setArraySize(60);
      }
    };

    setResponsiveArraySize();
  }, []);

  const resetBarColors = () => {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar) => {
      bar.style.backgroundColor = 'blue';
    });
  };

  const createNewArray = (size = arraySize) => {
    const newArray = Array.from({ length: size }, () => {
      const value = Math.floor(Math.random() * 190) + 1;
      const color = `blue`;
      return { value, color };
    });
    resetBarColors();
    setArray(newArray);
  };

  const bubbleSort = async () => {
    setIsSorting(true);
    await bubble(() => delay(speedRef.current));
    setIsSorting(false);
  };
  const insertionSort = async () => {
    setIsSorting(true);
    await insertion(() => delay(speedRef.current));
    setIsSorting(false);
  };
  const SelectionSort = async () => {
    setIsSorting(true);
    await selection(() => delay(speedRef.current));
    setIsSorting(false);
  };
  const quickSort = async () => {
    setIsSorting(true);
    const ele = document.querySelectorAll('.bar');
    await quick(0, ele.length - 1, () => delay(speedRef.current), ele);
    setIsSorting(false);
  };
  const mergeSort = async () => {
    setIsSorting(true);
    const ele = document.querySelectorAll('.bar');
    await merge(0, ele.length - 1, () => delay(speedRef.current), ele);
    setIsSorting(false);
  };


  useEffect(() => {
    createNewArray();
  }, [arraySize]);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <header>
        <h1 className="text">
          <span className="letter letter-1">A</span>
          <span className="letter letter2">L</span>
          <span className="letter letter-3">G</span>
          <span className="letter letter-4">O</span>
          <span className="letter letter-4">R</span>
          <span className="letter letter-4">I</span>
          <span className="letter letter-4">T</span>
          <span className="letter letter-4">M</span>
        </h1>
        <nav>
          <div className="container-fluid">
            <div className="row g-3 align-items-center p-3">
              <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start">
                <button
                  id='create'
                  type="button"
                  className="btn m-2"
                  onClick={() => createNewArray()}
                  disabled={isSorting}
                >
                  New Array
                </button>
                <button id='refresh' type="button" className="btn m-2" onClick={handleRefresh}>Reset</button>
              </div>

              <div className="col-12 col-md-4 d-flex flex-column flex-md-row justify-content-center range">
                
                <span id="size" className="d-flex flex-column align-items-center m-2" >
                  <label htmlFor="arrSize" className="rangeText form-label mb-1 text-center" style={{ width: "200px" }}>
                    Size: {arraySize}
                  </label>
                  <input
                    id="arrSize"
                    type="range"
                    min="5"
                    max="100"
                    step="1"
                    value={arraySize}
                    onChange={(e) => setArraySize(parseInt(e.target.value))}
                    className="form-range custom-range w-100"
                    disabled={isSorting}
                  />
                </span>

                <span id="speed" className="d-flex flex-column align-items-center m-2" >
                  <label htmlFor="speedInput" className="rangeText form-label mb-1 text-center" style={{ width: "200px" }}>
                    Speed: {currSpeed}ms
                  </label>
                  <input
                    id="speedInput"
                    type="range"
                    min="20"
                    max="300"
                    step="1"
                    value={currSpeed}
                    onChange={(e) => setCurrSpeed(parseInt(e.target.value))}
                    className="form-range custom-range w-100"
                  />
                </span>
              </div>


              <div className="sortBtn col-12 col-md-4 d-flex flex-wrap justify-content-center justify-content-md-center gap-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => bubbleSort()}
                  disabled={isSorting}
                >
                  Bubble Sort
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => SelectionSort()}
                  disabled={isSorting}
                >
                  Selection Sort
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => insertionSort()}
                  disabled={isSorting}
                >
                  Insertion Sort
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => quickSort()}
                  disabled={isSorting}
                >
                  Quick Sort
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => mergeSort()}
                  disabled={isSorting}
                >
                  Merge Sort
                </button>
                <button
                  id='binary'
                  type="button"
                  className="btn btn-warning"
                  onClick={() => navigate("./Binary")}
                  disabled={isSorting}
                >
                  Binary Search
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div id="container" className="flex-container container my-4">
        {array.map((bar, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${bar.value * 2}px`,
              backgroundColor: bar.color,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Home;
