import "./LandingPage.css";
import CheshireCat from "../../assets/CheshireCatRemoved.png"
import WhiteRabbit from "../../assets/whiteRabbitRemoved.png"
import QueenOfHeartes from "../../assets/queenOfHeartesRemoved.png"
import MadHatterRemoved from "../../assets//madHatterRemoved (2).png"
import Alice from "../../assets/alice.png"
import React, { useState, useEffect } from 'react'; 
import { Link } from "react-router-dom";

import Table from 'react-bootstrap/Table';

function LandingPage(){
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [isHovering4, setIsHovering4] = useState(false);


    return(
        <div>
             <h1>Welcome to Alice's First Year Computer Science Study Guide!</h1>
             <Table>
                <tbody>
                    <tr>
                        <Link  id="theLink"  to = "/game-page"><td className={`my-div ${isHovering ? 'hovered' : ''}`} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}><img src = {CheshireCat} className = "landPageImage"/> <h2> Java </h2></td></Link>
                        <td></td>
                        <Link   id="theLink" to = "/game-page"><td className={`my-div ${isHovering2 ? 'hovered' : ''}`} onMouseEnter={() => setIsHovering2(true)} onMouseLeave={() => setIsHovering2(false)}> <img src = {WhiteRabbit} className = "landPageImage2"/> <h2> Python </h2></td></Link>
                 </tr>
                 <tr>
                    <td></td>
                    <td><img src = {Alice} className = "landPageImage"/></td>
                    <td></td>
                </tr>
                <tr>
                    <Link id="theLink" to = "/game-page"><td className={`my-div ${isHovering3 ? 'hovered' : ''}`} onMouseEnter={() => setIsHovering3(true)} onMouseLeave={() => setIsHovering3(false)}> <img src = {QueenOfHeartes} className = "landPageImage2"/> <h2>Object Oriented programming</h2></td></Link>
                    <td></td>
                    <Link   id="theLink" to = "/game-page"><td className={`my-div ${isHovering4 ? 'hovered' : ''}`} onMouseEnter={() => setIsHovering4(true)} onMouseLeave={() => setIsHovering4(false)}> <img src = {MadHatterRemoved} className = "landPageImage3"/> <h2>Study Tips</h2></td> </Link>
                </tr>
            </tbody>
 
             </Table>
        </div>
    )
}
export default LandingPage;