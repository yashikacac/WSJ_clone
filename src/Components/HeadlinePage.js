import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { ChatLeftDots } from 'react-bootstrap-icons';
import { Clock } from 'react-bootstrap-icons';
import './News_section.css';
import './App.css';


export default function HeadlinePage() {
    const [data, setData] = useState([])
    const [comment, setComment] = useState('69')

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?sources=bbc-news&q=Covid&sortBy=publishedAt&apiKey=e7f20bf552a84bb495699da6f50080cf').then((result) => {
            result.json().then((resp) => {
                // console.warn("result",resp)
                setData(resp.articles)
                console.log('result', resp);
            })
        })
    }, [])


    return (
        <div>
            {
                data.slice(0, 1).map(item => {
                    return (
                        <div key={item.source.id} >
                            <img src={item.urlToImage} width='350px' height='250px' />
                            <h2 className='NewsTitle' id='HeadlineTitle'>{item.title}</h2>
                            <div>
                                <span className='item_content'>{item.description}</span>
                            </div>
                            <div className='comments'>
                                <ChatLeftDots />{' '}
                                <span>
                                    {comment}
                                </span>&nbsp; {''}
                                <span className='time'><Clock size={13} />{' '}Long Read</span>
                            </div>
                            <hr />
                        </div>
                    )

                })
            }
        </div>
    )
}