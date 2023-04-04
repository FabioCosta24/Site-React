import { Col, Container, Row } from "react-bootstrap";


export const BannerWhere = () => {
    return (
        <section className = "banner" id="contactos">
            <Container>
                <p></p>
                <p></p>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}> 
                        <h1>{'Contactos'}</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of </p>
                    <span> 
              </span>
                    </Col>
                    <Col xs={12} md={6} xl={5}> 
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.373997190812!2d-8.645186492865005!3d41.06319605403865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247a6e5818a75d%3A0x5e4ad824e2f753f1!2sJose%20Manuel%20Pereira%20Costa!5e0!3m2!1spt-PT!2spt!4v1679395388571!5m2!1spt-PT!2spt"></iframe>  
                     </Col>
                     <p></p>
                        <button className="Orçamentos"><span>Orçamento</span></button>
                </Row>
            </Container>

        </section>  
    )

}