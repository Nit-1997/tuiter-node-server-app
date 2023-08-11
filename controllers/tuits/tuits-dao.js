import tuitsModel from '../../tuits/tuits-model.js';
export const findTuits  = ()          => tuitsModel.find();
export const createTuit = (tuit)      => tuitsModel.create(tuit);
export const deleteTuit = (tid)       => tuitsModel.deleteOne({_id: tid});
export const updateTuit = async(tid, tuit) => {
    try{
        const updatedTuit = await tuitsModel.updateOne({_id: tid}, {$set: tuit})
        console.log("updated tuit ",updatedTuit);
    }catch(error){
        console.log(error);
    }
}