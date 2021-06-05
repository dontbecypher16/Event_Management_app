const Event = require("../models/eventSchema")
const anonImage = require("../image");



exports.createNewEvent = (req, res) => {
    let obj = req.body;
    obj['img'] = `https://imagegen.herokuapp.com/?category=${obj.category}` 
    anonImage(obj)
    .then((res) => {
        console.log(res)
        return res
       });


    Event.create({
        ...obj
    }, (err, newEvent) => {
        if(err){
            return res.status(500).json({ message: err})
        }else {
            return res.status(200).json({ message: "new event created", newEvent})
        }
    })
}


exports.fetchEvents = (req, res) => {
    let conditions = {}
    if(req.query.category){
        conditions.category = req.query.category
    }


    Event.find(conditions, (err, events) => {
        if(err) {
            return res.status(500).json({ message: err})
        }else {
            return res.status(200).json({ events })
        }
    })
}


exports.fetchOneEvent = (req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if(err) {
            return res.status(500).json({ message: err})
        }
        else if(!event){
            return res.status(404).json({ message: "event not found"})
        }
        else {
            return res.status(200).json({ event })
        }
    })
}


exports.updateOneEvent = (req, res) => {
    Event.findByIdAndUpdate(req.params.id, {...req.body}, (err, event) => {
        if(err) {
            return res.status(500).json({ message: err})
        }
        else if(!event){
            return res.status(404).json({ message: "event not found"})
        }
        else {
            event.save((err, savedEvent) => {
                if(err) {
                    return res.status(500).json({ message: err})
                }
            })
            return res.status(200).json({ message: "event updated successfully" })
        }
    })
}



exports.deleteOneEvent = (req, res) => {
    Event.findByIdAndDelete(req.params.id, (err, event) => {
        if(err) {
            return res.status(500).json({ message: err})
        }
        else if(!event){
            return res.status(404).json({ message: "event not found"})
        }
        else {
            return res.status(200).json({ message: "event deleted successfully" })
        }
    })
}