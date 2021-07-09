import { LandingPage,Courses,Webinar,Blogs,FinShiksha } from '../../pages/index';
import {  Faqs } from "..";
import { Routes, Route } from 'react-router-dom';
import './App.css';

export function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/webinars" element={<Webinar />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/finshiksha" element={<FinShiksha />}/>
                <Route path="/home/faqs" element={<Faqs />} />
            </Routes>
        </div>
    );
}