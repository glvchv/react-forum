import { getCookie } from "../utils/getCookie";
import { dispatchSuccess, dispatchError } from '../utils/setNotification';

const token = getCookie('x-auth-token');
const userId = localStorage.getItem('userId')

async function getAllPosts() {
    try {
        const promise = await fetch('http://localhost:175/api/posts',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            },
        );

        const res = await promise.json();
        return res.data;
    } catch (err) {
        dispatchError(err.message);
    }
};

async function getPostById(id) {
    console.log('getPostById invoked!');
    try {
        const promise = await fetch(`http://localhost:175/api/posts/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            });
        const res = await promise.json();
        return res.data;
    } catch (err) {
        dispatchError(err.message);
    }
};

async function likePost(id) {
    try {
        const promise = await fetch(`http://localhost:175/api/posts/${id}/like`,
            {
                method: 'PUT',
                body: JSON.stringify({ userId }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }
        );
        const res = await promise.json();
        dispatchSuccess(res.message)
        return res.data;
    } catch (err) {
        dispatchError(err.message);
    }
};

async function likeReply(id) {
    try {
        const promise = await fetch(`http://localhost:175/api/like/reply/${id}`, 
        {
            method: 'PUT',
            body: JSON.stringify({ userId }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });

        const res = await promise.json();
        dispatchSuccess(res.message)
        return res.data;
    } catch (err) {
        console.log(err.message);
    }
}

export {
    getAllPosts,
    getPostById,
    likePost,
    likeReply
}
