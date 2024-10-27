import "./LandingPage.css";
import CheshireCat from "../../assets/CheshireCatRemoved.png"
import WhiteRabbit from "../../assets/whiteRabbitRemoved.png"
import QueenOfHeartes from "../../assets/queenOfHeartesRemoved.png"
import MadHatterRemoved from "../../assets//madHatterRemoved (2).png"
import Alice from "../../assets/alice.png"

import Table from 'react-bootstrap/Table';

function LandingPage(){
    return(
        <div>
             <h1>Welcome to Alice's First Year Computer Science Study Guide!</h1>
             <Table>
                <tbody>
                    <tr>
                        <td><img src = {CheshireCat} className = "landPageImage"/></td>
                        <td></td>
                        <td> <td><img src = {WhiteRabbit} className = "landPageImage"/></td></td>
                 </tr>
                 <tr>
                    <td></td>
                    <td><img src = {Alice} className = "landPageImage"/></td>
                    <td></td>
                </tr>
                <tr>
                    <td><img src = {QueenOfHeartes} className = "landPageImage"/></td>
                    <td></td>
                    <td><img src = {MadHatterRemoved} className = "landPageImage"/></td>
                </tr>
            </tbody>

             </Table>
        </div>
    )
}
export default LandingPage;