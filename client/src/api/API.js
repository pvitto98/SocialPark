const baseURL = "/api";


/* LOG IN/OUT API FUNCTIONS */
async function isAuthenticated(){
    let url = "/user";
    const response = await fetch(baseURL + url);
    const userJson = await response.json();
    if(response.ok){
        return userJson;
    } else {
        let err = {status: response.status, errObj:userJson};
        throw err;  // An object with the error coming from the server
    }
}

async function userLogin(username, password) {
    return new Promise((resolve, reject) => {
        fetch(baseURL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password}),
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                    resolve(user);
                });
            } else {
                // analyze the cause of error
                response.json()
                    .then((obj) => { reject(obj); }) // error msg in the response body
                    .catch((err) => { reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
            }
        }).catch((err) => { reject({ errors: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}

async function userLogout(username, password) {
    return new Promise((resolve, reject) => {
        fetch(baseURL + '/logout', {
            method: 'POST',
        }).then((response) => {
            if (response.ok) {
                resolve(null);
            } else {
                // analyze the cause of error
                response.json()
                    .then((obj) => { reject(obj); }) // error msg in the response body
                    .catch((err) => { reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
            }
        });
    });
}

/* '/teacherPortal/selectSlot' (<SelectSlot/>) API FUNCTIONS */
async function getPosts(idUtente) {
    let url = "/post/"+ idUtente;

    const response = await fetch(baseURL + url);
    const postsJson = await response.json();
    if(response.ok){
        console.log(postsJson)
        return postsJson;
    } else {
        let err = {status: response.status, errObj:postsJson};
        throw err;  // An object with the error coming from the server
    }
}

async function createPost(post) {
    return new Promise((resolve, reject) => {
        console.log(post);
        fetch(baseURL + "/post", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        }).then( (response) => {
            if(response.ok) {
                response.json().then((x)=>{
                    resolve(x.postId);
                });
            } else {
                // analyze the cause of error
                response.json()
                .then( (obj) => {reject(obj);} ) // error msg in the response body
                .catch( (err) => {reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
            }
        }).catch( (err) => {reject({ errors: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}

async function getProfile(idUtente) {
    let url = "/profile/"+ idUtente;

    const response = await fetch(baseURL + url);
    const profileJson = await response.json();
    if(response.ok){
        console.log(profileJson)
        return profileJson;
    } else {
        let err = {status: response.status, errObj:profileJson};
        throw err;  // An object with the error coming from the server
    }
}




const API = {isAuthenticated, userLogin, userLogout, getPosts, createPost, getProfile} ;
export default API;