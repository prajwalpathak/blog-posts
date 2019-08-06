import React from 'react';
import axios from 'axios';
import Post from './Post'

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => this.setState({ posts: res.data }))
    }

    handleDeletePost = (postId) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => {
                this.setState(previousState => {
                    return {
                        posts: previousState.posts.filter((post) => postId !== post.id)
                    };
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleChange = (newPost) => {
        const { id, title, userId, body } = newPost;

        axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title,
            body,
            userId
        }).then(res => {
            this.setState(prevState => {
                const idx = prevState.posts.findIndex(post => post.id === id);
                const updatedPost = { ...prevState.posts[idx], title, body };
                const posts = [...prevState.posts.slice(0, idx), updatedPost, ...prevState.posts.slice(idx + 1)]
                return {
                    posts
                }
            })
        })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>My Blog</h1>
                <div className="posts-container">
                    {
                        this.state.posts.map(post =>
                            <Post
                                key={post.id}
                                post={post}
                                handleDelete={this.handleDeletePost}
                                handleEdit={this.handleChange} />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Posts;