import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        const { title, body } = props.post;
        this.state = {
            title,
            body
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { handleDelete, handleEdit } = this.props;
        const { title, body } = this.state;
        const { id, userId } = this.props.post;
        return <div>
            {
                <div className="post-container">
                    <textarea id="title" name="title" value={title} onChange={this.handleChange}></textarea>
                    <textarea style={{ height: 100 }} name="body" value={body} onChange={this.handleChange}></textarea>
                    <div className="button-container">
                        <button onClick={() => handleDelete(id)}>Delete Post</button>
                        <button onClick={() => handleEdit({ id, userId, title, body })}>Edit Post</button>
                    </div>
                </div>
            }
        </div>
    }
}

export default Post;