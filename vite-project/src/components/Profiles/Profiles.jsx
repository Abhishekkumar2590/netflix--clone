import React, { useState } from 'react';
import './Profiles.css';
import profile_img from '../../assets/profile_img.png';

const sampleProfiles = [
  { id: 1, name: 'User 1', img: profile_img },
  { id: 2, name: 'User 2', img: profile_img },
  { id: 3, name: 'User 3', img: profile_img },
  { id: 4, name: 'User 4', img: profile_img },
];

const Profiles = ({ onSelectProfile }) => {
  const [selectedProfileId, setSelectedProfileId] = useState(null);

  const handleSelect = (profile) => {
    setSelectedProfileId(profile.id);
    onSelectProfile(profile);
  };

  return (
    <div className="profiles-container">
      <h1>Select Your Profile</h1>
      <div className="profiles-list">
        {sampleProfiles.map((profile) => (
          <div
            key={profile.id}
            className={`profile-card ${selectedProfileId === profile.id ? 'selected' : ''}`}
            onClick={() => handleSelect(profile)}
          >
            <img src={profile.img} alt={profile.name} />
            <p>{profile.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
