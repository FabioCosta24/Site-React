import { Col, Container, Row } from "react-bootstrap";
import headderImg from "../assets/companyimages/apresentacao.jpg";
import headderImg2 from "../assets/companyimages/apresentacao2.jpg";
import headderImg3 from "../assets/companyimages/apresentacao3.jpg";

export const Banner = () => {
    return (
        <section className = "banner" id="home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}> 
                        <span className="tagline">Bem-Vindo!</span>
                        <h1>{'Quem Somos'}</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}> 
                        <img src ={headderImg} alt = "headderImg"></img>
                        <img src={headderImg2} alt = "headderImg2"></img>
                        <img src ={headderImg3} alt = "headderImg3"></img>
                    </Col>
                </Row>
            </Container>

        </section>  
    )

}


