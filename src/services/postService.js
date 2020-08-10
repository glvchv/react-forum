import { getCookie } from "../utils/getCookie";
import { dispatchSuccess, dispatchError } from '../utils/setNotification';

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
        const token = getCookie('x-auth-token');
        const promise = await fetch(`http://localhost:175/api/posts/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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
        const token = getCookie('x-auth-token');
        const userId = localStorage.getItem('userId')
        const promise = await fetch(`http://localhost:175/api/posts/${id}/like`,
            {
                method: 'PUT',
                body: JSON.stringify({ userId }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        const res = await promise.json();
        dispatchSuccess(res.message)
        return res.data;
    } catch (err) {
        console.log(err.message);
    }
};

async function likeReply(id) {
    try {
        const token = getCookie('x-auth-token');
        const userId = localStorage.getItem('userId')
        const promise = await fetch(`http://localhost:175/api/like/reply/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify({ userId }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

        const res = await promise.json();
        dispatchSuccess(res.message)
        return res.data;
    } catch (err) {
        console.log(err.message);
    }
}

async function createPost(title, text, category, onSuccess, onFailure) {
    try {
        const token = getCookie('x-auth-token');
        const userId = localStorage.getItem('userId')
        const promise = await fetch('http://localhost:175/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ title, text, category, author: userId })
        });

        const res = await promise.json();
        if (res.data) {
            onSuccess(res.message);
        }
    } catch (err) {
        onFailure(err);
    }
}

async function replyToPost(text, post) {
    try {
        console.log(text, post);
        const token = getCookie('x-auth-token');
        const userId = localStorage.getItem('userId')

        const promise = await fetch(`http://localhost:175/api/posts/${post}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ authorId: userId, text })
            }
        )

        const res = await promise.json();
        dispatchSuccess(res.message);
        return res.data;
    } catch (err) {
        dispatchError(err.message);
    }
}

export {
    getAllPosts,
    getPostById,
    likePost,
    likeReply,
    createPost,
    replyToPost
}
