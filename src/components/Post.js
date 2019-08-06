import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.post.title,
            body: props.post.body
        }
    }

    handleChange = event => {
        const name = event.target.name;
        const value= event.target.value;
        this.setState({[name]: value});
    };

    render() {
        const id = this.props.post.id;
        const userId = this.props.post.userId;
        return <React.Fragment>
            {
                <div className="post-container">
                    <input id="title" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <input id="body" name="body" value={this.state.body} onChange={this.handleChange}/>
                    <button onClick={() => this.props.handleDelete(id)}>Delete Post</button>
                    <button onClick={() => this.props.handleEdit({id, userId, title, body})}>Edit Post</button>
                </div>
            }
        </React.Fragment>
    }
}

export default Post;