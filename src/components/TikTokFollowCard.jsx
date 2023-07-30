import '../css/TikTokFollowCard.css';
import { useState, useEffect } from 'react';

export function TikTokFollowCard ({ name, username, bg, photo, initialIsFollowing }) {
  const localStorageKey = `ttIsFollowing_${username}`;

  const [isFollowing, setIsFollowing] = useState(() => {
    const savedIsFollowing = window.localStorage.getItem(localStorageKey);
    return savedIsFollowing !== null ? JSON.parse(savedIsFollowing) : initialIsFollowing;
  });

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(isFollowing));
  }, [isFollowing, localStorageKey]);

  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing
    ? 'btn-follow is-following'
    : 'btn-follow';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className='tt-follow-card'>
      <div className='bg-img'>
        <img src={photo} alt='Imagen de fondo' />
      </div>
      <div className='info'>
        <img src={bg} alt='Foto de perfil' />
        <h3>{name}</h3>
        <h5>{username}</h5>
        <button className={buttonClassName} onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
