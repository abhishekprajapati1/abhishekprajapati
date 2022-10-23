import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Typography, AppBar, Grid, Button, ListItem, ListItemButton } from '@mui/material';

import './styles/Dashboard.css';


import CreatePost from './CreatePost';
import AllPosts from './AllPosts';

const Dashboard = () => {

    const handleCreatePostClick = ()=>{
        const root = ReactDOM.createRoot(document.getElementById('admin-root'));
        root.render(
            <CreatePost />
        );
    }
    const handleAllPostClick = ()=>{
        const root = ReactDOM.createRoot(document.getElementById('admin-root'));
        root.render(
            <AllPosts />
        );
    }


    return (
        <div className="dashboard-wrapper">
            
        </div>
    )
}

export default Dashboard