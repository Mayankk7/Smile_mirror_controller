import React, { useState } from "react";
import axios from "axios";

const Main = () => {
  const [ip, setip] = useState("");

  const on = async ({ ip }) => {
    const data = await axios.get(`/on`, {
      Headers: {
        "Allow-Control-Allow-Origin": "*",
      },
    });
    console.log(data);
  };

  const off = async ({ ip }) => {
    const data = await axios.get(`/off`, {
      Headers: {
        "Allow-Control-Allow-Origin": "*",
      },
    });
    console.log(data);
  };

  const toggle = async ({ ip }) => {
    const data = await axios.get(`/toggle`, {
      Headers: {
        "Allow-Control-Allow-Origin": "*",
      },
    });
    console.log(data);
  };

  return (
    <div className='App'>
      <div className='App-header'>
        <input
          type='text'
          placeholder='Enter the IP'
          value={ip}
          onChange={(e) => {
            setip(e.target.value);
          }}></input>
        <button onClick={() => setip(ip)}>Set ip</button>
      </div>
      <div className='flex'>
        <div className='flex-item'>
          <button className='btn' onClick={() => on({ ip })}>
            ON
          </button>
        </div>
        <div className='flex-item'>
          <button
            className='btn'
            onClick={() => {
              off({ ip });
            }}>
            OFF
          </button>
        </div>
        <div className='flex-item'>
          <button
            className='btn'
            onClick={() => {
              toggle({ ip });
            }}>
            TOGGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
