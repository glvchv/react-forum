export async function getAllPosts() {
    try {
        const promise = await fetch('http://localhost:175/api/posts',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        const res = await promise.json();
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export async function getPostById(id, token) {
    console.log('getPostById invoked!');
    try {
        const promise = await fetch(`http://localhost:175/api/posts/${id}`,
            {
                method: 'GET',
                headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': token
                }
            });
        const res = await promise.json();
        return res.data;
    } catch (err) {
        console.log(err);
    }
};