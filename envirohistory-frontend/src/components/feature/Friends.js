import React from 'react';

const Friends = () => {
  let posts = [];

  let data = [
    {
      username: 'Robby Lexel',
      img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=688&q=80",
      date: 'Nov. 18, 2019',
      content: 'Destroyed nearly 2,000 structures; burned nearly 18,000 acres.'
    },
    {
      username: 'Sal Row',
      img: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      date: 'Nov. 15, 2019',
      content: 'Wow...'
    },
    {
      username: 'Bob Cool',
      img: "https://images.unsplash.com/photo-1564836249054-bfbdc2cbfbb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      date: 'Nov. 13, 2019',
      content: 'Check out this artile https://www.nytimes.com/2019/11/19/climate/climate-real-estate-developers.html'
    },
  ];

  data.forEach(item => {
    posts.push(
      <div className="card result-card">
          <img
            className="rounded-circle user-img-post"
            src={item.img}
            alt=""
          />
         <div class="card-body">
           <h5 class="card-title">{item.username}</h5>
           <small>{item.date}</small>
           <p class="card-text">
             {item.content}
           </p>
         </div>
      </div>
    )
  });

  return (
    <div className="container">
      <div id="friends-container" className="jumbotron">
        <div className="row">
          <img
            className="rounded-circle user-img"
            src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            style={{ height: '100px', width: '100px' }}
            alt=""
          />

          <img
            className="rounded-circle user-img"
            src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=688&q=80"
            style={{ height: '100px', width: '100px' }}
            alt=""
          />

          <img
            className="rounded-circle user-img"
            src="https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            style={{ height: '100px', width: '100px' }}
            alt=""
          />

          <img
            className="rounded-circle user-img"
            src="https://images.unsplash.com/photo-1564923630403-2284b87c0041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            style={{ height: '100px', width: '100px' }}
            alt=""
          />

          <img
            className="rounded-circle user-img"
            src="https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            style={{ height: '100px', width: '100px' }}
            alt=""
          />

          <img
            className="rounded-circle user-img"
            src="https://images.unsplash.com/photo-1543080853-556086153871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            style={{ height: '100px', width: '100px' }}
            alt=""
          />

          <a href="/profile">
            <img
              className="rounded-circle user-img"
              src="https://images.unsplash.com/photo-1564836249054-bfbdc2cbfbb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              style={{ height: '100px', width: '100px' }}
              alt=""
            />
          </a>
        </div>
      </div>

      <img
        id="friend-map"
        src="https://static.techspot.com/images2/news/bigimage/2018/02/2018-02-12-image-6.jpg"
        alt="friends-map"
      ></img>

      <div id="posts-container" className="container">
        {posts}
      </div>
    </div>
  );
};

export default Friends;
