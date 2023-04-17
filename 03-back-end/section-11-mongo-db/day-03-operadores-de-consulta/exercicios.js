//ex 1
use('cinema');
db.movies.find({
    category: { $all: ['action', 'adventure'] }
});

//ex 2
use('cinema');
db.movies.find({
    category: { $all: ['action', 'sci-fi'] },
    imdbRating: { $gt: 7 }
});

//ex 3
use('cinema');
db.movies.find(
    {
        ratings: {
            $gt: 103
        }
    },
    {
        _id: 0,
        title: 1,
        ratings: 1
    }
);

//ex 4
use('cinema');
db.movies.find(
    {
        ratings: {
            $gt: 103
        }
    }
);

//ex 5
use('cinema');
db.movies.find(
    {
        ratings: {
            $elemMatch: { $gte: 100, $lte: 105 }
        }
    },
    {
        _id: 0,
        title: 1,
        ratings: 1
    }
);

//ex 6
use('cinema');
db.movies.find(
    {
        ratings: {
            $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] }
        }
    },
    {
        _id: 0,
        title: 1,
        ratings: 1
    }
);

//ex 7
use('cinema');
db.movies.find(
    {
        ratings: { $gt: 103 },
        category: 'adventure'
    },
    {
        _id: 0,
        title: 1,
        ratings: 1,
        category: 1
    }
);

//ex 8
use('cinema');
db.movies.find(
    {
        category: { $size: 2 }
    },
    {
        _id: 0,
        title: 1,
    }
);

//ex 9
use('cinema');
db.movies.find(
    {
        ratings: { $size: 4 }
    },
    {
        _id: 0,
        title: 1,
    }
);

//ex 10
use('cinema');
db.movies.find(
    {
        category: { $size: 2 },
        budget: { $mod: [5, 0] }
    }
);

//ex 11 
use('cinema');
db.movies.find(
    {
        $or: [
            { category: 'sci-fi' },
            { ratings: { $gt: 199 } }
        ]

    },
    { title: 1, ratings: 1, category: 1, _id: 0 }
);

//ex 12
use('cinema');
db.movies.find(
    {
        description: {
            $regex: /^The/
        }
    }
);

//ex 13
db.movies.find(
    {
        description: {
            $regex: /humanity.$/
        }
    }
).pretty();

//ex 14
db.movies.find(
    {
        $expr: {
            $lt: ["$budget", "$grossWorldwide"]
        }
    }
).pretty();
