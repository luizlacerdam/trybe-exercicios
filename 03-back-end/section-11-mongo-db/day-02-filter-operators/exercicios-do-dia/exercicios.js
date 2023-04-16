// ex 1
use('class');
db.superheroes.findOne();

// ex 2
use('class');
db.superheroes.find({ "aspects.height": { $lt: 180 } });


// ex 3
use('class');
db.superheroes.countDocuments({ "aspects.height": { $lt: 180 } });

// ex 4
use('class');
db.superheroes.countDocuments({ "aspects.height": { $lte: 180 } });

// ex 5
use('class');
db.superheroes.findOne({ "aspects.height": { $gte: 200 } });

// ex 6
use('class');
db.superheroes.countDocuments({ "aspects.height": { $gte: 200 } });

// ex 7
use('class');
db.superheroes.find({ "aspects.eyeColor": 'green' });

// ex 8
use('class');
db.superheroes.find({ "aspects.eyeColor": 'blue' });

// ex 9
use('class');
db.superheroes.find({ "aspects.hairColor": { $in: ["black", "no hair"] } });

// ex 10
use('class');
db.superheroes.countDocuments({ "aspects.hairColor": { $in: ["black", "no hair"] } });

// ex 11
use('class');
db.superheroes.countDocuments({ "aspects.hairColor": { $nin: ["black", "no hair"] } });

// ex 12
use('class');
db.superheroes.countDocuments({ "aspects.height": { $not: { $gte: 180 } } });

// ex 13
use('class');
db.superheroes.find({
    $and: [
        { race: "Human" },
        { "aspects.height": { $gt: 180 } }
    ]
});

// ex 14
use('class');
db.superheroes.find({
    $and: [
        {
            $or: [{ "aspects.height": 180 }, { "aspects.height": 200 }]
        },
        {
            publisher: "Marvel Comics"
        }
    ]
});

// ex 15
use('class');
db.superheroes.find({
    $and: [
        {
            "aspects.height": { $gt: 80, $lte: 100 }
        },
        {
            $or: [{ race: "Human" }, { race: "Mutant" }]
        },
        {
            publisher: { $ne: "Marvel Comics" }
        }
    ]
});

// ex 16
use('class');
db.superheroes.countDocuments({
    race: { $exists: false }
});

// ex 17
db.superheroes.countDocuments(
    { "aspects.hairColor": { $exists: true } }
);

// ex 18
db.superheroes.deleteOne(
    { publisher: "Sony Pictures" }
);

// ex 19 
db.superheroes.deleteMany(
    { publisher: "George Lucas" }
);