import React from 'react'
import OtherPost from './OtherPost'
import Post from './Post'
import WritePost from './WritePost'

const posts = [
    {
        id: 1,
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        emoji: '✍🏼',
        category: 'Article',
        title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
        desc: 'I’ve worked in UX for the better part of a decade. F..',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarthak Kamra',
        views: '1.4k views'
    },
    {
        id: 2,
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
        emoji: '🔬',
        category: 'Education',
        title: 'Tax Benefits for Investment under National Pension Scheme..',
        desc: 'I’ve worked in UX for the better part of a decade. F..',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarah West',
        views: '4.8k views'
    },
    {
        id: 3,
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        emoji: '🔬',
        category: 'Education',
        title: 'Tax Benefits for Investment under National Pension Scheme..',
        desc: 'I’ve worked in UX for the better part of a decade. F..',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarah West',
        views: '4.8k views'
    },
    {
        id: 4,
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
        emoji: '🔬',
        category: 'Education',
        title: 'Tax Benefits for Investment under National Pension Scheme..',
        desc: 'I’ve worked in UX for the better part of a decade. F..',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarah West',
        views: '4.8k views'
    },
    {
        id: 5,
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        emoji: '🔬',
        category: 'Education',
        title: 'Tax Benefits for Investment under National Pension Scheme..',
        desc: 'I’ve worked in UX for the better part of a decade. F..',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarah West',
        views: '4.8k views'
    },
    {
        id: 6,
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
        emoji: '🔬',
        category: 'Education',
        title: 'Tax Benefits for Investment under National Pension Scheme..',
        desc: 'I’ve worked in UX for the better part of a decade. F..',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarah West',
        views: '4.8k views'
    },
]

const otherposts = [
    {
        id: 1,
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        emoji: '🗓️',
        category: 'Meetup',
        title: 'Finance & Investment Elite Social Mixer @Lujiazui',
        date: 'Fri, 12 Oct, 2018',
        location: 'Ahmedabad, India',
        site: 'Visit Website',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarthak Kamra',
        views: '800 views'
    },
    {
        id: 2,
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        emoji: '💼',
        category: 'Job',
        title: 'Software Developer - II',
        date: 'Innovaccer Analytic...',
        location: 'Noida, India',
        site: 'Apply on Timesjobs',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarthak Kamra',
        views: '800 views'
    },
]

function Posts({ onSignIn, onSignUp }) {
    return (
        <div className={`xl:grid xl:grid-cols-3 xl:w-[705.2px] mx-auto  ${(onSignIn || onSignUp) ? 'blur-md' : ''} `}>
            {posts.map(post => {
                return <Post key={post.id} id={post.id} img={post.img} emoji={post.emoji} category={post.category} title={post.title} desc={post.desc} userimg={post.userimg} username={post.username} views={post.views} />
            })}
            {otherposts.map(post => {
                return <OtherPost key={post.id} id={post.id} img={post.img} emoji={post.emoji} category={post.category} title={post.title} date={post.date} location={post.location} site={post.site} userimg={post.userimg} username={post.username} views={post.views} />
            })}
            <div className='hidden xl:inline-flex'><WritePost onSignIn={onSignIn} onSignUp={onSignUp} /></div>
        </div>
    )
}

export default Posts