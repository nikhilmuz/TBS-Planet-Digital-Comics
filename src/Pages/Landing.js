import React from 'react'
import { Container } from 'reactstrap'
import SlidingTabs from './../Components/Tabs'

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
                description: 'this is my discription'
            },
            {
                com_id: '2',
                title: 'आप कैसे है  2',
                img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
                url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
                description: 'आप कैसे है '
            },
            {
                title: 'आप कैसे है e67',
                img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
                url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
                description: 'this is my discription'
            },

            {
                title: 'title345',
                img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
                url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
                description: 'this is my discription'
            },

            {
                title: 'title3432',
                img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
                url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
                description: 'this is my discription'
            },
            {
                title: 'title3',
                img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
                url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
                description: 'this is my discription'
            },
            {
                title: 'title4',
                img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
                url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
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
            },
            {
                title: 'title2',
                img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
                url: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
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