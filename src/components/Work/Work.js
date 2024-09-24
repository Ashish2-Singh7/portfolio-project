import React, { useState } from 'react';
import Card from '../WorkCard/Card';
import './work.css'
import { featuredPortfolio as data } from '../../Data'
import { webPortfolio as web } from '../../Data'
import { designPortfolio as content } from '../../Data'

function Work() {
    const [all, setAll] = useState(data);
    return (
        <div className='W-whole'>
            <div className="W-title">
                <h1>What can I do ?</h1>
            </div>
            <div className="W-categories">
                <ul>
                    <li><div className="c-cat-title" onClick={()=>{setAll(data)}}>All</div></li>
                    <li><div className="c-cat-title" onClick={()=>{setAll(web)}}>WebSites</div></li>
                    <li><div className="c-cat-title" onClick={()=>{setAll(content)}}>Mobile</div></li>
                </ul>
            </div>
            <div className="W-cards">
                <div className="col-rows-W-cards">
                    {all?.map((element) => {
                        return <div key={element.id}>
                            <Card title={element.title} img={element.img} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Work;
