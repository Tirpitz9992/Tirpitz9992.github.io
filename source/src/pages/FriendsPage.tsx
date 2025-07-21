import React from 'react';

interface FriendLink {
  name: string;
  url: string;
  description: string;
  avatar?: string;
  tags: string[];
}

const FriendsPage: React.FC = () => {
  const friends: FriendLink[] = [
  ];

  return (
    <div className="container">
      <article className="friends-page">
        <header className="friends-header">
          <h1 className="friends-title">友情链接</h1>
          <p className="friends-subtitle"></p>
        </header>

        <section className="friends-content">

          <div className="friends-grid">
            {friends.map((friend, index) => (
              <div key={index} className="friend-card">
                <div className="friend-avatar">
                  {friend.avatar ? (
                    <img src={friend.avatar} alt={friend.name} />
                  ) : (
                    <div className="friend-avatar-placeholder">
                      {friend.name.charAt(0)}
                    </div>
                  )}
                </div>
                
                <div className="friend-info">
                  <h3 className="friend-name">
                    <a href={friend.url} target="_blank" rel="noopener noreferrer">
                      {friend.name}
                    </a>
                  </h3>
                  <p className="friend-description">{friend.description}</p>
                  
                  <div className="friend-tags">
                    {friend.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="friend-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="friends-exchange">
            <h3>🔗 交换友链</h3>
            <div className="exchange-info">
              <p>如果你想和我交换友情链接，请发送邮件至 <a href="tirpitz9992@gmail.com">tirpitz9992@gmail.com</a>,邮件标题请注明"友链交换"，并附上你的网站信息。
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default FriendsPage;
