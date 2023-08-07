import {v5 as uuid , stringify} from 'uuid';

let users = [];


export const findAllUsers = () => users;


export const findUserById = (uid) => {
    const index = users.findIndex((u) => u._id === uid);
    if (index !== -1) return users[index];
    return null;
};


export const findUserByUsername = (username) => {
    const index = users.findIndex((u) => u.username === username);
    if (index !== -1) return users[index];
    return null;
};


export const findUserByCredentials = (username, password) => {
    const index = users.findIndex((u) => u.username === username && u.password === password);
    if (index !== -1) return users[index];
    return null;
};


export const createUser = (user) => {
    const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
    user._id =  uuid(Date.now().toString(),MY_NAMESPACE)
    console.log(user._id);
    users.push(user);
    return user;
}


export const updateUser = (user) => {
    console.log(users)
    console.log(user)
    const index = users.findIndex((u) => u._id.toString() === user._id.toString());
    console.log("Found user at index "+index)
    users[index] = { ...users[index], ...user };
    console.log("User after update")
    console.log(users[index])
    return {status: 'ok',
         user: users[index]
    }
};
export const deleteUser = (uid) => {
    const index = users.findIndex((u) => u._id === uid);
    users.splice(index, 1);
    return {status: 'ok'}
};
