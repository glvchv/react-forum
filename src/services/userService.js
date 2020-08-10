import { dispatchError, dispatchSuccess } from "../utils/setNotification";
import { getCookie } from "../utils/getCookie";

export async function loginUser(username, password, onSuccess, onFailure) {
    try {

        const promise = await fetch('http://localhost:175/api/user/login',
            {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        const authToken = promise.headers.get('Authorization');
        document.cookie = `x-auth-token=${authToken}`;
        const res = await promise.json();

        if (res.data && authToken) {
            onSuccess({
                username: res.data.username,
                id: res.data._id
            }, res.message)
        } else {
            onFailure(res.message)
        }

    } catch (err) {
        onFailure(err.message);
    }
};

export async function verifyUser(token, onSucces) {
    try {
        const promise = await fetch('http://localhost:175/api/user/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });

        const res = await promise.json();
        if (res.data) {
            onSucces({
                username: res.data.username,
                id: res.data._id
            });
        }

    } catch (err) {
        console.log(err);
    }
}

export async function registerUser(username, password, onSuccess, onFailure) {
    try {

        const promise = await fetch('http://localhost:175/api/user/register',
            {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        const authToken = promise.headers.get('Authorization');
        document.cookie = `x-auth-token=${authToken}`;
        const res = await promise.json();

        if (res.data && authToken) {
            onSuccess({
                username: res.data.username,
                id: res.data._id
            }, res.message);
        } else {
            onFailure(res.message)
        }

    } catch (err) {
        onFailure(err.message);
    }
};

export async function getProfile(id, token) {
    try {
        const promise = await fetch(`http://localhost:175/api/user/profile/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }

            }
        );
        const res = await promise.json();
        return res.data;
    } catch (err) {
        console.log(err.message);
    }
}

export async function updateAvatar(string) {
    const userId = localStorage.getItem('userId');
    const token = getCookie('x-auth-token');

    try {
        const promise = await fetch(`http://localhost:175/api/user/${userId}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({url: string})
        });

        const res = await promise.json();
        dispatchSuccess(res.message);
        return res.data;
    } catch (err) {
        dispatchError(err.message)
    }
}



