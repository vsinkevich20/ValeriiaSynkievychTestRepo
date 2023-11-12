import fetch from 'node-fetch';

//Task 1

export async function get(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during GET request:', error);
        throw error;
    }
}

export async function post(url, body) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during POST request:', error);
        throw error;
    }
}
const data = await get('https://jsonplaceholder.typicode.com/posts/');
console.log(data);
const data2 = await post('https://jsonplaceholder.typicode.com/posts/');
console.log(data2);

//Task 2

async function getPostsByUsedId(url, userId) {
    try {
        const response = await fetch(url + '/posts');
        const posts = await response.json();
        const userPosts = posts
            .filter(post => post.userId === userId)
            .map(({ title, ...rest }) => rest);
        return userPosts;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
const posts = await getPostsByUsedId('https://jsonplaceholder.typicode.com', 5);
console.log(posts);

async function createNewPost(url, body) {
    try {
        const response = await fetch(`${url}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error creating new post:', error);
        throw error;
    }
}
//Task 3
const baseUrl = 'https://jsonplaceholder.typicode.com';
const body = {
    userId: 155,
    title: 'New title',
    body: 'New body',
};
const result = await createNewPost(baseUrl, body);
console.log(result);

//Task 4
function resolveNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 11);
            if (randomNumber > 5) {
                resolve(`Resolved ${randomNumber}`);
            } else {
                reject(`Rejected ${randomNumber}`);
            }
        }, 3000);
    });
}

resolveNumber()
    .then(result => console.log(result))
    .catch(error => console.error(error));

