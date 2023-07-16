const Pet = require('../models/Pet');

exports.create = (ownerId, petData) => Pet.create({ ...petData, owner: ownerId });

exports.getAll = () => Pet.find().lean();

exports.getOne = (petId) => Pet.findById(petId);

exports.delete = (petId) => Pet.findByIdAndDelete(petId);

exports.edit = (petId, petData) => Pet.findByIdAndUpdate(petId, petData);

exports.donate = async (userId, petId) => {
    
    const pet = await Pet.findById(petId);
    
    pet.donations.push(userId);
  
    await pet.save();
};

exports.search = async (location) => {

    let pets = await this.getAll();

    if (location) {
        pets = pets.filter(x => x.location.toLowerCase() == location.toLowerCase())
    }

    return pets;
};