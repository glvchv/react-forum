import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:175/api/posts')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    posts: data.data
                })
            }).catch (err => {
                alert(err)
            }) 
    }

    render() {
        return (
            <div>
                <h1>Posts:</h1>
                <ul>
                    {this.state.posts.map(post => {
                        return (<li key={post._id}>{post.title}</li>)
                    })}
                </ul>
            </div>
        )
    }


}

export default Posts;