import "./LandingPage.css";
import CheshireCat from "../../assets/CheshireCatRemoved.png"
import WhiteRabbit from "../../assets/whiteRabbitRemoved.png"
import QueenOfHeartes from "../../assets/queenOfHeartesRemoved.png"
import MadHatterRemoved from "../../assets//madHatterRemoved (2).png"
import Alice from "../../assets/alice.png"
function LandingPage(){
    return(
        <div>
             <h1>Welcome to Alice's First Year Computer Science Study Guide!</h1>
                 <div class = "image container">
                    <img src = {CheshireCat}/>
                    <img src = {WhiteRabbit}/>
                    <img src = {QueenOfHeartes}/>
                    <img src = {MadHatterRemoved}/>
                    <img src = {Alice}/>
                 </div>
        </div>
    )
}
export default LandingPage;