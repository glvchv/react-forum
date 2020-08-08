import { getCookie } from "../utils/getCookie";

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
        console.log(err);
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
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err);
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

        const res = promise.json();
        return res.data;

    } catch (err) {
        console.log(err);
    }
};

export {
    getAllPosts,
    getPostById,
    likePost
}
