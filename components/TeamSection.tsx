import React from 'react';
import './TeamSection.css'; // Assuming you have a CSS file for styling

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="/images/member1.jpg" alt="Team Member 1" className="member-photo" />
          <h3 className="member-name">John Doe</h3>
          <p className="member-role">CEO</p>
        </div>
        <div className="team-member">
          <img src="/images/member2.jpg" alt="Team Member 2" className="member-photo" />
          <h3 className="member-name">Jane Smith</h3>
          <p className="member-role">Head of Marketing</p>
        </div>
        <div className="team-member">
          <img src="/images/member3.jpg" alt="Team Member 3" className="member-photo" />
          <h3 className="member-name">Alice Johnson</h3>
          <p className="member-role">Lead Designer</p>
        </div>
        <div className="team-member">
          <img src="/images/member4.jpg" alt="Team Member 4" className="member-photo" />
          <h3 className="member-name">Bob Brown</h3>
          <p className="member-role">CTO</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;