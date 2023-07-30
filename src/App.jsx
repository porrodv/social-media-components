import './App.css';
import { CustomSection } from './components/CustomSection.jsx';
import { InstagramFollowCard } from './components/InstagramFollowCard.jsx';
import { TikTokFollowCard } from './components/TikTokFollowCard.jsx';
import { instagramData, tikTokData } from './utils/data.js';

function App () {
  return (
    <>
      <CustomSection title='Tit Tok follow card' id='tt-container'>
        {tikTokData.map((user) => {
          const { name, username, bg, photo, initialIsFollowing } = user;

          return (
            <TikTokFollowCard
              key={username}
              name={name}
              username={username}
              bg={bg}
              photo={photo}
              initialIsFollowing={initialIsFollowing}
            />
          );
        })}
      </CustomSection>

      <CustomSection title='Instagram follow card' id='ig-container'>
        {instagramData.map((user) => {
          const { username, lastFriend, followers, initialIsFollowing } = user;

          return (
            <InstagramFollowCard
              key={username}
              username={username}
              lastFriend={lastFriend}
              followers={followers}
              initialIsFollowing={initialIsFollowing}
            />
          );
        })}
      </CustomSection>
    </>
  );
}

export default App;
