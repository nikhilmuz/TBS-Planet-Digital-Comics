import React from 'react'
import { Container } from 'reactstrap'
import { SlidingTabs } from './../../components'
import URL from './../../root'

const list = [
  {
    id: '',
    language: 'Hindi',
    listOfCom: [
      {
        com_id: '1',
        title: 'आप कैसे है ',
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        target: '_blank',
        description: 'this is my discription'
      },
      {
        com_id: '2',
        title: 'आप कैसे है  2',
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        target: '_blank',
        description: 'आप कैसे है '
      },
      {
        title: 'आप कैसे है e67',
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        target: '_blank',
        description: 'this is my discription'
      },
      
      {
        title: 'title345',
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        target: '_blank',
        description: 'this is my discription'
      },
      
      {
        title: 'title3432',
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        target: '_blank',
        description: 'this is my discription'
      },
      {
        title: 'title3',
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        target: '_blank',
        description: 'this is my discription'
      },
      {
        title: 'title4',
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        target: '_blank',
        description: 'this is my discription'
      }
    ]
  },
  {
    id: '',
    language: 'English',
    listOfCom: [
      {
        title: 'title',
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        target: '_blank'
      },
      {
        title: 'title2',
        img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
        target: '_blank'
      }
    ]
  }
]

const LandingPage = () => {
  return (
      <div className="landing-page">
          <Container>
            <SlidingTabs list={list} showIcons onClickPath={`${'http://localhost:3000'}/comic`} />
          </Container>
      </div>
    )
}

export default LandingPage;