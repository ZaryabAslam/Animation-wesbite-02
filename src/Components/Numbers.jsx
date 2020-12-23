import useWebAnimations, { zoomIn } from '@wellyshen/use-web-animations';
import React from 'react'
// import './App.css';



function Numbers() {
    const {ref} = useWebAnimations({...zoomIn});
    return (
        <div>

            <div id='Numbers' className="backu" ref={ref}>
                <h1 className="our">OUR <span>NUMBERS</span></h1>
                <div className="numb">
                    <div className="proj">
                        <div>
                            <i className="fa fa-code" />
                        </div>
                        <div>
                            <br />
                            <h2>32+</h2>
                        </div>
                        <div>
                            <h2>PROJECTS COMPLETED</h2>
                        </div>
                    </div>
                    <div className="serv">
                        <div>
                            <i className="fa fa-line-chart" />
                        </div>
                        <div>
                            <br />
                            <h2>10+</h2>
                        </div>
                        <div>
                            <h2>SERVICES</h2>
                        </div>
                    </div>
                    <div className="cli">
                        <div>
                            <i className="fa fa-users" />
                        </div>
                        <div>
                            <br />
                            <h2>30+</h2>
                        </div>
                        <div>
                            <h2>SATISFIED CLIENTS</h2>
                        </div>
                    </div>
                </div></div>

        </div>
    );
}

export default Numbers;
