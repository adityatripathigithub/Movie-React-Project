import React from "react";

const About = () => {
    return (
        <div className=" min-h-screen w-screen p-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center bg-blue-900 text-zinc-300 p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold">About Us</h1>
                </header>
                <section className="mt-8 bg-zinc-900 p-6 rounded-lg shadow-lg">
                    <p className="text-gray-400 mb-4">
                        Welcome to <strong className="text-zinc-300">Movie Application</strong>, a comprehensive source for discovering movies, TV shows, and entertainment content! We offer a vast, dynamic library of information for everything from blockbusters to indie films and binge-worthy
                        series.
                    </p>
                    <h2 className="text-xl font-bold text-blue-900 mb-2">Our Purpose</h2>
                    <p className="text-gray-400 mb-4">
                        Our platform provides users with detailed information on movies and TV shows, including cast and crew details, reviews, ratings, release dates, trailers, and more. Whether you're here to find out what's trending or dive deep into the history of cinema, we've got you covered.
                    </p>
                    <h2 className="text-xl font-bold text-blue-900 mb-2">Features</h2>
                    <ul className="list-disc list-inside text-gray-400 mb-4">
                        <li>Movie & TV Show Database: A constantly updated library of titles across all genres.</li>
                        <li>User Ratings & Reviews: Explore opinions from our vibrant community and share your thoughts.</li>
                        <li>Upcoming Releases: Stay informed about upcoming films and shows.</li>
                        <li>Personalized Watchlists: Save your favorite titles and track what you plan to watch.</li>
                    </ul>
                    <h2 className="text-xl font-bold text-blue-900 mb-2">Our Mission</h2>
                    <p className="text-gray-400 mb-4">We aim to create the most intuitive and informative platform for entertainment enthusiasts, helping you easily discover new content, track your favorites, and stay up-to-date on industry news.</p>
                    <h2 className="text-xl font-bold text-blue-900 mb-2">Community-Driven</h2>
                    <p className="text-gray-400 mb-4">
                        <strong className="text-zinc-300">Movie Application</strong> thrives on community participation. Join our user base to rate and review your favorite (or not-so-favorite) movies and shows, and engage with other fans.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
