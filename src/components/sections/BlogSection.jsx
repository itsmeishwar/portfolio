import React from 'react';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Mastering React Hooks in 2024",
            excerpt: "Learn how to use modern React hooks effectively in your projects...",
            date: "Jan 15, 2024",
            category: "React",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "UI/UX Trends for Modern Web Design",
            excerpt: "Explore the latest design trends that are shaping the web...",
            date: "Jan 10, 2024",
            category: "Design",
            readTime: "4 min read"
        },
        // Add more blog posts
    ];

    return (
        <section id="blog" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Latest <span className="text-gradient">Blog Posts</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Sharing insights, tutorials, and thoughts on web development, design, and technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div 
                            key={post.id} 
                            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="bg-violet-900/30 text-violet-300 px-3 py-1 rounded-full text-sm">
                                    {post.category}
                                </span>
                                <span className="text-gray-500 text-sm">{post.date}</span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                                {post.title}
                            </h3>
                            
                            <p className="text-gray-400 mb-6">
                                {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500 text-sm">{post.readTime}</span>
                                <button className="text-white hover:text-violet-400 transition-colors flex items-center gap-2">
                                    Read More 
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="https://ishwarawasthi.com.np/blog" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        View All Blog Posts
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;