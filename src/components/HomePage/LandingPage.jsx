import "./LandingPage.css";
import CheshireCat from "../../assets/CheshireCatRemoved.png"
import WhiteRabbit from "../../assets/whiteRabbitRemoved.png"
import QueenOfHeartes from "../../assets/queenOfHeartesRemoved.png"
import MadHatterRemoved from "../../assets//madHatterRemoved (2).png"
import Alice from "../../assets/alice.png"

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function LandingPage(){
    return(
        <div>
             <h1>Welcome to Alice's First Year Computer Science Study Guide!</h1>
             <Table>
                <tbody>
                    <tr>
                        <td><img src = {CheshireCat} className = "landPageImage"/></td>
                        <td><img src = {CheshireCat} className = "landPageImage"/></td>
                        <td><img src = {CheshireCat} className = "landPageImage"/></td>
                 </tr>
                 <tr>
                    <td><img src = {WhiteRabbit} className = "landPageImage"/></td>
                    <td><img src = {WhiteRabbit} className = "landPageImage"/></td>
                    <td><img src = {WhiteRabbit} className = "landPageImage"/></td>
                </tr>
                <tr>
                    <td><img src = {QueenOfHeartes} className = "landPageImage"/></td>
                    <td><img src = {QueenOfHeartes} className = "landPageImage"/></td>
                    <td><img src = {QueenOfHeartes} className = "landPageImage"/></td>
                </tr>
            </tbody>

             </Table>
                {/* <Container>
                    <Row className = "rows">
                        <Col>
                            <img src = {CheshireCat} className = "landPageImage"/>
                        </Col>
                        <Col>
                            <img src = {CheshireCat} className = "landPageImage"/>
                        </Col>
                        <Col>
                            <img src = {CheshireCat} className = "landPageImage"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <img src = {WhiteRabbit} className = "landPageImage"/>
                        </Col>
                        <Col >
                            <img src = {WhiteRabbit} className = "landPageImage"/>
                        </Col>
                        <Col >
                            <img src = {WhiteRabbit} className = "landPageImage"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src = {QueenOfHeartes} className = "landPageImage"/>
                        </Col>
                        <Col>
                            <img src = {QueenOfHeartes} className = "landPageImage"/>
                        </Col>
                        <Col>
                            <img src = {QueenOfHeartes} className = "landPageImage"/>
                        </Col>
                    </Row>

                </Container> */}
                 {/* <div class = "image container">
                    <img src = {CheshireCat}/>
                    <img src = {WhiteRabbit}/>
                    <img src = {QueenOfHeartes}/>
                    <img src = {MadHatterRemoved}/>
                    <img src = {Alice}/>
                 </div> */}
        </div>
    )
}
export default LandingPage;