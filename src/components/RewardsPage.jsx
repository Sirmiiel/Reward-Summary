// src/components/RewardsPage.js
import React from 'react';
import './RewardsPage.css';
import ProfilePic from '../assets/images/profilepic.jpeg';

const RewardsPage = () => {
  // Dummy data for cashback history
  const cashbackHistory = [
    {
      date: '2024-01-12',
      amount: 50,
      bookingDetails: 'Booking ID: B001 - Spa Service',
    },
    {
      date: '2024-01-08',
      amount: 30,
      bookingDetails: 'Booking ID: B002 - Gym Membership',
    },
    {
      date: '2024-01-01',
      amount: 100,
      bookingDetails: 'Booking ID: B003 - Hotel Booking',
    },
  ];

  return (
    <div className="design-root">
      {/* Header Section */}
      <div>
        <div className="header">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </svg>
          </div>
          <h2 className="title">Rewards</h2>
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-container">
            <div className="profile-image">
            <img src={ProfilePic} alt="Profile Picture" />
            </div>
            <div className="profile-info">
              <p className="profile-name">Hi, John!</p>
              <p className="profile-balance">Your balance: $150</p>
            </div>
          </div>
          <button className="invite-button">Invite friends</button>
        </div>


            {/* Earnings Section */}
            <h2 className="section-title">Earnings</h2>
        <div className="earning-item">
          <div>
            <p className="earning-title">$20 off first booking</p>
            <p className="earning-date">Earned on 12/01</p>
          </div>
          <p className="earning-amount">+$40</p>
        </div>

        <div className="earning-item">
          <div>
            <p className="earning-title">$50 off for referring a friend</p>
            <p className="earning-date">Earned on 12/15</p>
          </div>
          <p className="earning-amount">+$50</p>
        </div>

        <div className="earning-item">
          <div>
            <p className="earning-title">$100 off for referring a friend</p>
            <p className="earning-date">Earned on 12/30</p>
          </div>
          <p className="earning-amount">+$100</p>
        </div>

        {/* Cashback History Section */}
        <h2 className="section-title">Cashback History</h2>
        <div className="cashback-history-section">
          {cashbackHistory.map((transaction, index) => (
            <div key={index} className="cashback-history-item">
              <div>
                <p className="cashback-date">{transaction.date}</p>
                <p className="cashback-booking">{transaction.bookingDetails}</p>
              </div>
              <p className="cashback-amount">+${transaction.amount}</p>
            </div>
          ))}
        </div>

    

        {/* Redeem Rewards Section */}
        <h2 className="section-title">Redeem Rewards</h2>
        <div className="redeem-item">
          <p className="redeem-title">Direct Cashout</p>
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
            </svg>
          </div>
        </div>

        <div className="redeem-item">
          <p className="redeem-title">Apply Promo Code</p>
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <button className="cashout-button">
          <span>Cash Out Now</span>
        </button>
        <div className="footer-bg"></div>
      </div>
    </div>
  );
};

export default RewardsPage;
