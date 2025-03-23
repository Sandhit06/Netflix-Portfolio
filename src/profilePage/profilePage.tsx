// ProfilePage.tsx
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import { profileBannerData, profiles } from '../data/constants';
import { ProfileType } from '../types';

const ProfilePage: React.FC = () => {
  const { profileName } = useParams<{ profileName: string }>();

  const profile = ['Recruiter', 'developer', 'stalker', 'Adventurer'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'Recruiter';

  const currentProfile = profiles.find(p => p.name === profile);
  const backgroundGif = currentProfile?.backgroundGif || '';

  return (
    <>
      <div
        className="profile-page"
        style={{
          backgroundImage: `url(${backgroundGif})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <ProfileBanner bannerData={profileBannerData} />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
