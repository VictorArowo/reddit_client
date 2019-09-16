import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { H2 } from './~reusables/atoms/Text';
import Listings from './Listings';
import { Container } from './~reusables/atoms/Container';

const FrontPage = () => {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    axios({
      method: 'post',
      url: 'https://www.reddit.com/api/v1/access_token',
      params: {
        grant_type: 'authorization_code',
        code: `${new URLSearchParams(window.location.search).get('code')}`,
        redirect_uri: 'http://localhost:3000/frontpage'
      },
      auth: {
        username: 'GQHIk4x1kGDG4g',
        password: 'YE9D2ncgRjAbzO_wXEP36QkhlVA'
      }
    })
      .then(res => {
        setToken(res.data.access_token);
        return axios({
          url: `https://oauth.reddit.com/`,
          headers: {
            'User-Agent': 'ChangeMeClient/0.1 by ColonelVictor1',
            Authorization: `bearer ${res.data.access_token}`
          }
        });
      })
      .then(res => {
        setData(res.data.data);
        console.log(res.data.data);
      });
  }, []);

  const handleClick = e => {
    e.preventDefault();
    axios({
      url: `https://oauth.reddit.com?count=25&after=${data.after}`,
      headers: {
        'User-Agent': 'ChangeMeClient/0.1 by ColonelVictor1',
        Authorization: `bearer ${token}`
      }
    }).then(res => {
      //   debugger;
      setData(res.data.data);
    });
  };
  return (
    data && (
      <Container direction="column">
        <H2>Front Page</H2>
        <Listings data={data} />
        <button onClick={handleClick}>Next</button>
      </Container>
    )
  );
};

export default FrontPage;
