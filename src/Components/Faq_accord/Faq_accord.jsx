import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "./Faq_accord.css"

function Faq_accord() {
  return (
    <div>
        <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5 class="title">What is Fantra.com ?</h5></Accordion.Header>
        <Accordion.Body style={{color: "#5949b3", fontFamily: "Comfortaa"}}>
        <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header ><h5 class="title">How do I create an account?</h5></Accordion.Header>
        <Accordion.Body style={{color: "#5949b3", fontFamily: "Comfortaa"}}>
        <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header ><h5 class="title">Can I play any lottery on the site?</h5></Accordion.Header>
        <Accordion.Body style={{color: "#5949b3", fontFamily: "Comfortaa"}}>
        <div class="mycard-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                    terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Faq_accord