import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './News_section.css';
import './App.css';


export default function NewsCol3() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?domains=wsj.com&sortBy=popularity&apiKey=e7f20bf552a84bb495699da6f50080cf').then((result) => {
      result.json().then((resp) => {
        setData(resp.articles)
      })
    })
  }, [])


  return (
    <div>
      {
        data.slice(0, 5).map(item => {
          return (
            <div key={item.source.id} >
              <Container>
                <Row>
                  <Col> <img src={item.urlToImage} width='180px' height='100px'/>
                  </Col>
                  <Col>
                  <div >
                  <h6 className='NewsTitle'>{item.title}</h6>
                  </div>

                  </Col>
                </Row>
              </Container>

              <hr />
            </div>

          )

        })
      }
    </div>
  )
}