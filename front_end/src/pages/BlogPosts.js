import React from 'react'
import Posts from '../components/testposts.json'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux-items/actions/postActions'

class BlogPosts extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }
    componentDidUpdate(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (<div>{postItems}</div>)
    }
}
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(BlogPosts)