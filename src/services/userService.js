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
            })
        } else {
            onFailure()
        }
    } catch(err) {
        onFailure(err);
    }
};


