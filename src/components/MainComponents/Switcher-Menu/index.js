import React, { useEffect } from 'react';
import $ from 'jquery';

export default function SwitcherMenu() {
  // useEffect(() => {}, []);

  return (
    <div>
      <div className="switcher">
        <div className="switch_btn">
          <button>
            <i className="fas fa-palette"></i>
          </button>
        </div>
        <div className="switch_menu">
          <div className="switcher_container">
            <ul id="styleOptions" title="switch styling">
              <li>
                <a href="#" data-theme="blue" className="blue-color"></a>
              </li>
              <li>
                <a href="#" data-theme="pink" className="pink-color"></a>
              </li>
              <li>
                <a href="#" data-theme="violet" className="violet-color"></a>
              </li>
              <li>
                <a href="#" data-theme="crimson" className="crimson-color"></a>
              </li>
              <li>
                <a href="#" data-theme="orange" className="orange-color"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
