import {v5 as uuid , stringify} from 'uuid';
import usersModel from "./users-model.js";

export const findAllUsers = () =>
    usersModel.find();
export const findUserById = (id) =>
    usersModel.findById(id);
export const findUserByUsername = (username) =>
    usersModel.findOne({ username });
export const findUserByCredentials = (username, password) =>
    usersModel.findOne({ username, password });
export const createUser = (user) =>
    usersModel.create(user);
export const updateUser = async(id, user) => {
    try{
       const updatedUser =  usersModel.updateOne({ _id: id }, { $set: user });
       console.log("updated user : ", updatedUser)
       return updatedUser;
    }catch(error){
        console.log(error);
    }

}

export const deleteUser = (id) =>
    usersModel.deleteOne({ _id: id });



// let users = [];
//
//
// export const findAllUsers = () => users;
//
//
// export const findUserById = (uid) => {
//     const index = users.findIndex((u) => u._id === uid);
//     if (index !== -1) return users[index];
//     return null;
// };
//
//
// export const findUserByUsername = (username) => {
//     const index = users.findIndex((u) => u.username === username);
//     if (index !== -1) return users[index];
//     return null;
// };
//
//
// export const findUserByCredentials = (username, password) => {
//     const index = users.findIndex((u) => u.username === username && u.password === password);
//     if (index !== -1) return users[index];
//     return null;
// };
//
//
// export const createUser = (user) => {
//     const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
//     user._id =  uuid(Date.now().toString(),MY_NAMESPACE)
//     users.push(user);
//     return user;
// }
//
//
// export const updateUser = (user) => {
//     const index = users.findIndex((u) => u._id.toString() === user._id.toString());
//     users[index] = { ...users[index], ...user };
//     return {status: 'ok',
//          user: users[index]
//     }
// };
// export const deleteUser = (uid) => {
//     const index = users.findIndex((u) => u._id === uid);
//     users.splice(index, 1);
//     return {status: 'ok'}
// };
