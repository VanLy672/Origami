import React from 'react';
import Posts from '../publications/Posts/Posts';
import './Profile.css';

export default function Profile() {
  return <div className="Profile">
    <img src="/blue-origami-bird.png" alt="profle" />
    <div className="personal-info">
      <p>
        <span>Email: </span>
        alyz@gmail.com
      </p>
      <p>
        <span>Posts: </span>
        alyz
      </p>
    </div>
    <Posts limit={3} />
  </div>;
}