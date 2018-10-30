import React from 'react'
import { Container } from 'reactstrap'
import SlidingTabs from './../Components/Tabs'

const list = [
    {
        id: '',
        language: 'Hindi',
        listOfCom: [
            {
                id: '1',
                title: 'आप कैसे है ',
                genre: 'HRR',
                link: 'https://tbspla.net/loremipsum',
                episodes: '10',
                cover: 'https://link.to.cover/with-directory'
            },
            {
                id: '2',
                title: 'आप कैसे है 1',
                genre: 'HRR',
                link: 'https://tbspla.net/loremipsum',
                episodes: '10',
                cover: 'https://link.to.cover/with-directory'
            }
        ]
    },
    {
        id: '',
        language: 'English',
        listOfCom: [
            {
                id: '3',
                title: 'Title 1',
                genre: 'HRR',
                link: 'https://tbspla.net/loremipsum',
                episodes: '10',
                cover: 'https://link.to.cover/with-directory'
            },
            {
                id: '4',
                title: 'Title 2',
                genre: 'HRR',
                link: 'https://tbspla.net/loremipsum',
                episodes: '10',
                cover: 'https://link.to.cover/with-directory'
            }
        ]
    }
];

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Container>
                <SlidingTabs list={list} />
            </Container>
        </div>
    )
};

export default LandingPage;
