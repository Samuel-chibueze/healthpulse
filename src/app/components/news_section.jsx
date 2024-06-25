// components/NewsSection.js

import React from 'react';

const NewsSection = () => {

    // articles.json

    const articles = [
        {
            "id": 1,
            "title": "New Study on Health Benefits of Meditation",
            "date": "June 20, 2024",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "link": "/news/new-study-meditation"
        },
        {
            "id": 2,
            "title": "Tips for Healthy Eating During Summer",
            "date": "June 15, 2024",
            "summary": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "link": "/news/tips-healthy-eating-summer"
        },
        {
            "id": 3,
            "title": "Importance of Regular Exercise for Mental Health",
            "date": "June 10, 2024",
            "summary": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "link": "/news/importance-regular-exercise-mental-health"
        },
        {
            "id": 4,
            "title": "Understanding Different Types of Vaccines",
            "date": "June 5, 2024",
            "summary": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "link": "/news/understanding-vaccine-types"
        }
    ]



    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                {articles.map(article => (
                    <div
                        key={article.id}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{article.title}</h3>
                            <p className="text-gray-500 mb-2">{article.date}</p>
                            <p className="text-sm text-gray-700 mb-4">{article.summary}</p>
                            <a href={article.link} className="text-blue-500 font-semibold hover:underline">Read more</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewsSection;
