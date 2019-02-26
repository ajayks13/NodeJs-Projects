var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's rest",
        image: "https://images.unsplash.com/photo-1440262206549-8fe2c3b8bf8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "The Himalayas, or Himalaya, form a mountain range in Asia, separating the plains of the Indian subcontinent from the Tibetan Plateau. The Himalayan range has many of the Earth's highest peaks, including the highest, Mount Everest. The Himalayas include over fifty mountains exceeding 7,200 m (23,600 ft) in elevation, including ten of the fourteen 8,000-metre peaks. By contrast, the highest peak outside Asia (Aconcagua, in the Andes) is 6,961 m (22,838 ft) tall."
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1500332988905-1bf2a5733f63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "The Thar Desert, also known as the Great Indian Desert, is a large arid region in the northwestern part of the Indian subcontinent that covers an area of 200,000 km2 (77,000 sq mi) and forms a natural boundary between India and Pakistan. It is the world's 17th largest desert, and the world's 9th largest subtropical desert."
    },
    {
        name: "Canyon floor",
        image: "https://images.unsplash.com/photo-1477581265664-b1e27c6731a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "A canyon or gorge is a deep cleft between escarpments or cliffs resulting from weathering and the erosive activity of a river over geologic timescales. Rivers have a natural tendency to cut through underlying surfaces, eventually wearing away rock layers as sediments are removed downstream. A river bed will gradually reach a baseline elevation, which is the same elevation as the body of water into which the river drains."
    }
    
    ];


function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This palce is great, But i wish there was Internet.",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                data.comments.push(comment);
                                data.save();
                                console.log("Create new Comment");
                            }
                        });
                }
            });
        });
    });
    //add a few comments 
}

module.exports = seedDB;