const Album = require('../models/albumModels');



module.exports = {
    // findAllAlbums: (req, res) => {
    //     Album.find()
    //         .then((allAlbums) => {
    //             res.status(200).json(allAlbums)
    //         })
    //         .catch((err) => {
    //             res.status(400).json(err)
    //         })
    // },

    findAllAlbums: async (req, res) => {
        try{
            const allAlbums = await Album.find();
            res.status(200).json(allAlbums)
        }
        catch(err){
            res.status(400).json(err)
        }
    },
    // createAlbum: (req, res) => {
    //     Album.create(req.body)
    //         .then((newAlbum) => {
    //             res.status(200).json(newAlbum)
    //         })
    //         .catch((err) => {
    //             res.status(400).json(err)
    //         })
    // },

    createAlbum: async (req, res) => {
        try{
            const newAlbum = await Album.create(req.body);
            res.status(201).json(newAlbum);
        }
        catch(err){
            res.status(400).json(err)
        }
    },
    // ! Try to convert the remaining 3 controller functions to async/await 
    findOneAlbum: (req, res) => {
        Album.findOne({_id: req.params.id})
            .then((oneAlbum) => {
                res.status(200).json(oneAlbum)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    updateAlbum: (req, res) => {
        Album.findOneAndUpdate(        
            {_id: req.params.id}, 
            req.body, 
            {new:true, runValidators:true})
            .then((updatedAlbum) => {
                res.status(200).json(updatedAlbum)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }, 
    deleteAlbum: (req, res) => {
        Album.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }
}