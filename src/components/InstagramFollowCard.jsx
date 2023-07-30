import '../css/InstagramFollowCard.css';
import { useState, useEffect } from 'react';

export function InstagramFollowCard ({
  username,
  lastFriend,
  followers,
  initialIsFollowing
}) {
  const localStorageKey = `igIsFollowing_${username}`;

  const [isFollowing, setIsFollowing] = useState(() => {
    const savedIsFollowing = window.localStorage.getItem(localStorageKey);
    return savedIsFollowing !== null
      ? JSON.parse(savedIsFollowing)
      : initialIsFollowing;
  });

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(isFollowing));
  }, [isFollowing, localStorageKey]);

  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing
    ? 'btn-follow is-following'
    : 'btn-follow';

  const formattedText = `${lastFriend} y ${
    followers - 1
  } más siguen esta cuenta`;

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className='ig-follow-card'>
      <header>
        <img src={`https://unavatar.io/${username}`} alt='Imagen de perfil' />
        <div className='info'>
          <strong>{username}</strong>
          <span>{formattedText}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {buttonText}
        </button>
      </aside>
    </article>
  );
}
