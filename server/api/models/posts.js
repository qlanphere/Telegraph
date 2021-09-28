const db = require ('../dbConfig')

class Post {
    constructor(post){
        this.title = post.title
        this.name = post.name //will be pseudo
        this.story = post.story 
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const postData = await db.query(`SELECT * FROM posts;`)
                const posts = postData.rows.map(d => new Post(d))
                resolve(posts);
            } catch (err) {
                reject("Error retrieving posts")
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM dogs WHERE id = $1;`, [ id ]);
                let post = new Post(postData.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    }

    // static findByOwner (id) {
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             let dogsData = await db.query(`SELECT * FROM dogs WHERE ownerId = $1;`, [ id ]);
    //             const dogs = dogsData.rows.map(d => new Dog(d))
    //             resolve (dogs);
    //         } catch (err) {
    //             reject('Error retrieving owner\'s dogs');
    //         }
    //     });
    // } CAN ADD ROUTE TO GET POSTS BY name???
 
    static create(title, name, story){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`INSERT INTO posts (title, name, story) VALUES ($1, $2) RETURNING *;`, [ title, name, story ]);
                let newPost = new Post(postData.rows[0]);
                resolve (newPost);
            } catch (err) {
                reject('Error creating post.');
            }
        });
    }
}

module.exports = Post;