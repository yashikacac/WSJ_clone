import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './News_section.css';
import './App.css';


export default function NewsCol4() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?sources=bbc-news&q=Health&sortBy=publishedAt&apiKey=e7f20bf552a84bb495699da6f50080cf').then((result) => {
      result.json().then((resp) => {
        // console.warn("result",resp)
        setData(resp.articles)
        //  console.log('result',resp);
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
                  <Col>
                  <img src={item.urlToImage} width='170px' />
                  </Col>
                  <Col>
                    <div className='item_content'>{item.description}</div>
                  </Col>

                </Row>
              </Container>
              {/* <h2>{item.title}</h2> */}
              <hr />
            </div>
          )

        })
      }
    </div>
  )
}