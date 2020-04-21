import { FETCH_POSTS, NEW_POST, GET_ERRORS } from './types'

const postURL = "https://jsonplaceholder.typicode.com/posts"
// export const fetchPots = dispatch => {return (
//     fetch(postURL)
//     .then(res=>res.json())
//     .then(data => this.setState({posts:data}))
//     .catch(err=>console.log(err))
// )}

export const fetchPosts = () => dispatch => {
    console.log("I'm fetching it babes")
    fetch(postURL)
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
        .catcch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })
}

export const reduceNewPost = postData => dispatch => {
    fetch(postURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
        .catcch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })
}