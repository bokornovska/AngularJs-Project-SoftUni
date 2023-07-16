const router = require('express').Router();

const { getErrorMessage } = require('../utils/error');
const { isAuth } = require('../middlewares/authMiddleware');

const petService = require('../services/petService');

// -----------------------------------------------CREATE------------------------------------------------------
router.get('/create', isAuth, (req, res) => {
    res.render('pets/create');
});

router.post('/create', isAuth, async (req, res) => {

    const petData = req.body;

    try {

        await petService.create(req.user._id, petData);
        res.redirect('/pets/catalog');

    } catch (err) {
        res.render('pets/create', { error: getErrorMessage(err) });
    }

});

// ---------------------------------------------------CATALOG----------------------------------------------------------
router.get('/catalog', async (req, res) => {

    try {
        const pets = await petService.getAll();
        res.render('pets/catalog', { pets });
    } catch (error) {
        res.render('404', { error: 'Cannot get catalog page' });
    }

});

// ---------------------------------------------------DETAILS------------------------------------------------------------

router.get('/:petId/details', async (req, res) => {

    try {
        const petId = req.params.petId;

        const pet = await petService.getOne(petId).populate('likes').lean();

        const isOwner = req.user?._id == pet.owner;
        let hasLiked = false;

        const likedId = pet.likes.map(user => user._id);

        if (likedId.toString().includes(req.user?._id)) {
            hasLiked = true;
        }

        res.render('pets/details', { pet, isOwner, hasLiked });
    } catch (error) {
        res.render('404', { error: 'Cannot get details page' });
    }

});

// ---------------------------------------------------DELETE--------------------------------------------------------------

router.get('/:petId/delete', isAuth, async (req, res) => {

    const petId = req.params.petId;

    const pet = await petService.getOne(req.params.petId).lean();
    const isOwner = pet.owner == req.user?._id;

    try {
        if(isOwner){
            await petService.delete(petId);
            res.redirect('/pets/catalog')
        }else{
            throw new Error(error)
        }
    } catch (error) {
        res.render(`404`, { error: 'Cannot delete photo' });
    }
});

// --------------------------------------------------EDIT---------------------------------------------------------------

router.get('/:petId/edit', isAuth, async (req, res) => {

    const pet = await petService.getOne(req.params.petId).lean();

    const isOwner = pet.owner == req.user?._id;
    if(isOwner){

        res.render('pets/edit', { pet })
    }else{
        return res.render('404');
    }
});

router.post('/:petId/edit', isAuth, async (req, res) => {

    const petId = req.params.petId;
    const petData = req.body;
    

    try {
        await petService.edit(petId, petData);

        res.redirect(`/pets/${petId}/details`)
    } catch (error) {
        res.render(`404`, { error: 'Unable to edit', ...animalData });
    }
});

// -----------------------------------------LIKE----------------------------------------------------------
router.get('/:petId/like', isAuth, async (req, res) => {

    try {
        await petService.like(req.user._id, req.params.petId);

        res.redirect(`/pets/${req.params.petId}/details`);
    } catch (error) {
        return res.status(400).render('404', { error: getErrorMessage(error) });
    }

});

// ------------------------------SEARCH-----------------------------------------

// router.get('/search', async (req, res) => {

//     const { location } = req.query;
//     const animal = await animalService.search(location);

//     res.render('animals/search', { animal });

// });


module.exports = router;