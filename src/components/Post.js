import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        const {title, body} = props.post;
        this.state = {
            title,
            body
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {handleDelete, handleEdit} = this.props;
        const {title, body} = this.state;
        const {id, userId} = this.props.post;
        return <div>
            {
                <div>
                    <input name="title" value={title} onChange={this.handleChange}/>
                    <input name="body" value={body} onChange={this.handleChange}/>
                    <button onClick={() => handleDelete(id)}>DELETE</button>
                    <button onClick={() => handleEdit({id, userId, title, body})}>EDIT</button>
                </div>
            }
        </div>
    }
}

export default Post;