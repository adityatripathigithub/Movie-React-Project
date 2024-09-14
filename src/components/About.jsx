import React from "react";

const About = () => {
    return (
        <div className="text-white ml-10 ">
            <p className="w-[60%] mt-4">
                <h1 className="text-3xl mb-5 font-semibold">About Us :-</h1>
                Welcome to Movie Application, a comprehensive source for discovering movies, TV shows, and entertainment content! We offer a vast, dynamic library of information for everything from blockbusters to indie films and binge-worthy series.
                <br /> <br />
                Our Purpose: Our platform provides users with detailed information on movies and TV shows, including cast and crew details, reviews, ratings, release dates, trailers, and more. Whether you're here to find out what's trending or dive deep into the history of cinema, we've got you
                covered.
            </p>

            <p className="w-[60%] mt-10">
                <h1 className="text-3xl mb-5 font-semibold flex ">Features :-</h1>
                <li className="mt-3" >Movie & TV Show Database: A constantly updated library of titles across all genres.</li>
                <li className="mt-3" >User Ratings & Reviews: Explore opinions from our vibrant community and share your thoughts.</li>
                <li className="mt-3" >Upcoming Releases: Stay informed about upcoming films and shows.</li>
                <li className="mt-3" >Personalized Watchlists: Save your favorite titles and track what you plan to watch.</li>
                <p className="mt-10" >Our Mission: We aim to create the most intuitive and informative platform for entertainment enthusiasts, helping you easily discover new content, track your favorites, and stay up-to-date on industry news.</p>
            </p>
            <p className="w-[60%] mt-10">
                <h1 className="text-3xl mb-5 font-semibold">Community-Driven :-</h1>
                Movie Application thrives on community participation. Join our user base to rate and review your favorite (or not-so-favorite) movies and shows, and engage with other fans.
            </p>
        </div>
    );
};

export default About;
