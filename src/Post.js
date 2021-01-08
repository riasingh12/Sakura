import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
    return (
        <div classsName="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="user pfp"
                    src="/static/images/avatar/1.jpg"
                />
                <h3>Username</h3>
            </div>

            <img className="post__image" src="https://www.cathealth.com/images/cozy_cat_home.jpg"/>
            
            <h4 className="post__text">Caption</h4>
            {/*caption text*/}
           
            <p>#Hashtags</p>
            {/*hashtags*/}

        </div>
    )
}

export default Post
