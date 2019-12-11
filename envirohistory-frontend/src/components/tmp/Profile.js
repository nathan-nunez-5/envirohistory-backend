import React from 'react';

const Profile = () => {
    const posts = [];

    let data = [
        {
          username: 'Bob Cool',
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
        <div className="container-fluid">
        <div className="jumbotron jumbotron-fluid">
            <div className="container profile-container">
              <img src="https://images.unsplash.com/photo-1564836249054-bfbdc2cbfbb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="profile" className="rounded-circle profile-img"></img>

              <h5>User 05</h5>
              <p>User since: Oct. 26, 2019</p>
            </div>
        </div>

        <div className="container">
            {posts}
        </div>
        </div>
    )
}

export default Profile;
