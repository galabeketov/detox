import React from 'react'

export default function SwitcherMenu() {
  return (
    <div className="switcher">
        <div className="switch_btn">
            <button><i className="fas fa-palette"></i></button>
        </div>
        <div className="switch_menu">
            {/* <!-- color changer --> */}
            <div className="switcher_container">
                <ul id="styleOptions" title="switch styling">
                    <li>
                        <a href="javascript: void(0)" data-theme="blue" className="blue-color"></a>
                    </li>
                    <li>
                        <a href="javascript: void(0)" data-theme="pink" className="pink-color"></a>
                    </li>
                    <li>
                        <a href="javascript: void(0)" data-theme="violet" className="violet-color"></a>
                    </li>
                    <li>
                        <a href="javascript: void(0)" data-theme="crimson" className="crimson-color"></a>
                    </li>
                    <li>
                        <a href="javascript: void(0)" data-theme="orange" className="orange-color"></a>
                    </li>
                </ul>
            </div> 
        </div>
    </div>
  )
}
