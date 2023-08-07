const { petModel } = require('../models');


function getPets(req, res, next) {
    themeModel.find()
        .populate('userId')
        .then(pets => res.json(pets))
        .catch(next);
}

function getPet(req, res, next) {
    const { petId } = req.params;

    petModel.findById(petId)
        .populate({
            path : 'pets',
            populate : {
              path : 'userId'
            }
          })
        .then(pet => res.json(pet))
        .catch(next);
}

function createPet(req, res, next) {
    const { petName, petImage, location, years, type, gender, description, phoneNumber} = req.body;
    const { _id: userId } = req.user;

    petModel.create({ petName, petImage, location, years, type, gender, description, phoneNumber })
        // .then(pet => {
        //     newPost(postText, userId, theme._id)
        //         .then(([_, updatedTheme]) => res.status(200).json(updatedTheme))
        // })
        // .catch(next);
}

// function subscribe(req, res, next) {
//     const themeId = req.params.themeId;
//     const { _id: userId } = req.user;
//     themeModel.findByIdAndUpdate({ _id: themeId }, { $addToSet: { subscribers: userId } }, { new: true })
//         .then(updatedTheme => {
//             res.status(200).json(updatedTheme)
//         })
//         .catch(next);
// }

function editPet(req, res, next) {
    // const { petId } = req.params;
    // const { petInfo } = req.body;
    // const { _id: userId } = req.user;

    // // if the userId is not the same as this one of the post, the post will not be updated
    // petModel.findOneAndUpdate({ _id: petId, userId }, { text: postText }, { new: true })
    //     .then(updatedPost => {
    //         if (updatedPost) {
    //             res.status(200).json(updatedPost);
    //         }
    //         else {
    //             res.status(401).json({ message: `Not allowed!` });
    //         }
    //     })
    //     .catch(next);
}

function deletePet(req, res, next) {
    // const { petId } = req.params;
    // const { _id: userId } = req.user;

    // Promise.all([
    //     petModel.findOneAndDelete({ _id: petId, userId }),
    //     userModel.findOneAndUpdate({ _id: userId }, { $pull: { posts: postId } }),
    //     themeModel.findOneAndUpdate({ _id: themeId }, { $pull: { posts: postId } }),
    // ])
    //     .then(([deletedOne, _, __]) => {
    //         if (deletedOne) {
    //             res.status(200).json(deletedOne)
    //         } else {
    //             res.status(401).json({ message: `Not allowed!` });
    //         }
    //     })
    //     .catch(next);
}


module.exports = {
    getPets,
    createPet,
    getPet,
    deletePet
    // subscribe,
}
