import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Clock } from 'react-bootstrap-icons';
import './News_section.css';
import './App.css';


export default function NewsCol1() {
  const [data, setData] = useState([])
  const [time, setTime] = useState('6 min')
  const [update, setUpdate] = useState('9 min ago')

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?sources=bbc-news&apiKey=e7f20bf552a84bb495699da6f50080cf').then((result) => {
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
            <div >
              <h3 className='NewsTitle'>{item.title}</h3>
              <div className='item_content'>{item.description}</div>
              <br></br>
              <div className='news_duration'>
                <span className='news_update'>{update}</span>&nbsp;
                {' '}
                <span className='time'><Clock size={13} /> {time}</span>
              </div>
              <hr />
            </div>
          )

        })
      }

    </div>

  )
}