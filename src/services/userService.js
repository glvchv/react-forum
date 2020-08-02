export function loginUser(username, password) {
    fetch('http://localhost:175/api/user/login',
        {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data.message))
        .catch(err => console.log(err.message));
};


