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
                title: '13 Days 1 ',
                genre:'HRR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/hin/13days1.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/13days/1/hin/newepisodes.html',
                target: '_blank',
                // description: 'this is my discription',
            },
            {
                id: '2',
                title: '13 Days 2',
                genre:'HRR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/hin/13days2.jpg',
                episodes:'No. of episodes: 16',
                link:'https://www.tbsplanet.com/dailycomics/13days/2/hin/newepisodes.html',
                target: '_blank',
                // description: 'आप कैसे है '
            },
            {
                id:'',
                title: '13 Days 3',
                genre:'HRR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/hin/13days3.jpg',
                episodes:'No. of episodes 21',
                link:'https://www.tbsplanet.com/dailycomics/13days/3/hin/newepisodes.html',
                target: '_blank',
                // description: 'this is my discription'
            },

            {
                id:'',
                title: 'Sagar',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/hin/sagar.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/sagar/1/hin/newepisodes.html',
                // description: 'this is my discription'
            },

            {
                id:'',
                title: 'Varun-2',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/hin/varun2.jpg',
                episodes:'No. of episodes: 12',
                link:'https://www.tbsplanet.com/dailycomics/varun/2/hin/newepisodes.html',
                target: '_blank',
                // description: 'this is my discription'
            },
            {
                id:'',
                title: 'Varun-3',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/hin/varun3.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/varun/3/hin/newepisodes.html',
                target: '_blank',
                // description: 'this is my discription'
            },
            {
                id:'',
                title: 'Uttara',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/hin/varun4.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/varun/4/hin/newepisodes.html',
                target: '_blank',
                // description: 'this is my discription'
            },
            {
                id:'',
                title: 'Takshak-1',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/hin/takshak1.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/Takshak/1/hin/newepisodes.html',
                target: '_blank',
                // description: 'this is my discription'
            },
            {
                id:'',
                title: 'Takshak-2',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/hin/takshak2.jpg',
                episodes:'No. of episodes: 14',
                link:'https://www.tbsplanet.com/dailycomics/takshak/2/hin/newepisodes.html',
                target: '_blank',
                // description: 'this is my discription'
            },
        ]
    },
    {
        id: '',
        language: 'English',
        listOfCom: [
            {
                id:'',
                title: '13 Days 1',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/eng/13days1.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/13days/1/eng/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: '13 Days 2',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/eng/13days2.jpg',
                episodes:'No. of episodes: 16',
                link:'https://www.tbsplanet.com/dailycomics/13days/2/eng/newepisodes.html',
                target: '_blank'
            },

            {
                id:'',
                title: '13 Days 3',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/eng/13days3.jpg',
                episodes:'No. of episodes: 18',
                link:'https://www.tbsplanet.com/dailycomics/13days/3/eng/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Sagar',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/eng/sagar.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/sagar/1/eng/newepisodes.html',
            },

            {
                id:'',
                title: 'Varun-2',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/eng/varun2.jpg',
                episodes:'No. of episodes: 12',
                link:'https://www.tbsplanet.com/dailycomics/varun/2/eng/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Varun-3',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/eng/varun3.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/varun/3/eng/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Uttara (Varun-4)',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/eng/varun4.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/varun/4/eng/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Shanknabh (Varun-5)',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/eng/varun5.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/varun/5/eng/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Takshak-1',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/eng/takshak1.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/takshak/1/eng/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Takshak-2',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/eng/takshak2.jpg',
                episodes:'No. of episodes: 14',
                link:'https://www.tbsplanet.com/dailycomics/takshak/2/eng/newepisodes.html',
            },
            {
                id:'',
                title: 'Yug',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/eng/yug1.jpg',
                episodes:'No. of episodes: 14',
                link:'https://www.tbsplanet.com/dailycomics/yug/1/eng/newepisodes.html',
            },
            {
                id:'',
                title: 'Rudra',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/eng/rudra.jpg',
                episodes:'No. of episodes: 12',
                link:'https://www.tbsplanet.com/dailycomics/rudra/1/eng/newepisodes.html',
                target: '_blank'
            },

        ]
    },
    {
        id: '',
        language: 'Marathi',
        listOfCom: [
            {
                id:'',
                title: '13 days 1',
                genre:'HRR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/mar/13days1.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/13days/1/mar/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: '13 days 2',
                genre:'HRR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/mar/13days2.jpg',
                episodes:'No. of episodes: 16',
                link:'https://www.tbsplanet.com/dailycomics/13days/2/mar/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: '13 days 3',
                genre:'HRR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/mar/13days3.jpg',
                episodes:'No. of episodes: 18',
                link:'https://www.tbsplanet.com/dailycomics/13days/3/mar/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Sagar',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/mar/sagar.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/sagar/1/mar/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Varun-2',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/mar/varun2.jpg',
                episodes:'No. of episodes: 12',
                link:'https://www.tbsplanet.com/dailycomics/varun/2/mar/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Varun-3',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/mar/varun3.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/varun/3/mar/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Uttara (Varun-4)',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/mar/varun4.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/varun/4/mar/newepisodes.html',
                target: '_blank'
            },


        ]
    },
    {
        id: '',
        language: 'Telugu',
        listOfCom: [
            {
                id:'',
                title: '13 Days 1',
                genre:'HRR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/tel/13days1.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/13days/1/tel/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: '13 Days 2',
                genre:'HRR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/tel/13days2.jpg',
                episodes:'No. of episodes: 16',
                link:'https://www.tbsplanet.com/dailycomics/13days/2/tel/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: '13 Days 3',
                genre:'HRR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/tel/13days3.jpg',
                episodes:'No. of episodes: 18',
                link:'https://www.tbsplanet.com/dailycomics/13days/3/tel/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Sagar',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/tel/sagar.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/sagar/1/tel/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Varun-2',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/tel/varun2.jpg',
                episodes:'No. of episodes: 12',
                link:'https://www.tbsplanet.com/dailycomics/varun/2/tel/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Varun-3',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/tel/varun3.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/varun/3/tel/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Uttara (Varun-4)',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/tel/varun4.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/varun/4/tel/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Takshak',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/tel/takshak.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/takshak/1/tel/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Yug',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/tel/yug1.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/yug/1/tel/newepisodes.html',
                target: '_blank'
            },


        ]
    },
    {
        id: '',
        language: 'Bangla',
        listOfCom: [
            {
                id:'',
                title: '13 days 1',
                genre:'HRR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/ben/13days1.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/13days/1/ben/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: '13 days 2',
                genre:'HRR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/ben/13days2.jpg',
                episodes:'No. of episodes: 16',
                link:'https://www.tbsplanet.com/dailycomics/13days/2/ben/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: '13 days 3',
                genre:'HRR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/ben/13days3.jpg',
                episodes:'No. of episodes: 18',
                link:'https://www.tbsplanet.com/dailycomics/13days/3/ben/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Sagar',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/ben/sagar.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/sagar/1/ben/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Varun-2',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/ben/varun2.jpg',
                episodes:'No. of episodes: 12',
                link:'https://www.tbsplanet.com/dailycomics/varun/2/ben/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Varun-3',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/ben/varun3.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/varun/3/ben/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Yug',
                genre:'SHR',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/ben/yug1.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/yug/1/ben/newepisodes.html',
                target: '_blank'
            },
        ]
    },
    {
        id: '',
        language: 'Kannada',
        listOfCom: [
            {
                id:'',
                title: '13 Days - 1',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/kan/13days1.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/13days/1/kan/newepisodes.html',
                target: '_blank'
            },
            {
                id:'',
                title: 'Sagar',
                cover: 'https://cdn.tbsplanet.com/dailycomics/covers/kan/sagar.jpg',
                episodes:'No. of episodes: 15',
                link:'https://www.tbsplanet.com/dailycomics/sagar/1/tel/newepisodes.html',
                target: '_blank'
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
}

export default LandingPage;