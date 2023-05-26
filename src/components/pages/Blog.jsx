import React from 'react';
import Header from '../shared/Header';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <Header>Blog</Header>
            <div>
            <div className='px-20'>
            <h1 className='text-xl font-bold mt-4'>Access token and refresh token</h1>
            <p>An access token and a refresh token are commonly used in authentication and authorization mechanisms to grant and manage user access to protected resources in web applications</p>
            <hr />
            <h1 className='text-xl font-bold mt-4'>SQL Databases: </h1>
            <p>SQL databases are based on a structured schema, where data is organized into tables with predefined columns and relationships between them.</p>
            <hr />
            <h1 className='text-xl font-bold mt-4'>NoSQL Databases:</h1>
            <p>NoSQL databases are schema-less or have a flexible schema, allowing for dynamic and unstructured data storage</p>
            <hr />
            <h1 className='text-xl font-bold mt-4'>Express Js</h1>
            <p>Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features for building web applications and APIs, allowing developers to have fine-grained control over the application's structure and logic.</p>
            <hr />
            <h1 className='text-xl font-bold mt-4'>NestJS</h1>
            <p>NestJS is a feature-rich, opinionated framework built on top of Express.js. It follows Angular's architectural principles and leverages TypeScript, decorators, and dependency injection to enable the development of scalable and maintainable server-side applications. NestJS provides powerful routing, dependency injection system, middleware support, database integration, and more. It promotes code reusability, testability, and maintainability through its modular and organized approach.</p>
            <hr />
            <h1 className='text-xl font-bold mt-4'>What is MongoDB</h1>
            <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
        </div>
            </div>
        </div>
    );
};

export default Blog;