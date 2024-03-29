//ex 1
use('bios')
db.bios.find({ _id: 1 })

//ex 2
use('bios')
db.bios.find({ _id: 8 }, { name: 1 })

//ex 3
use('bios')
db.bios.find({ _id: 8 }, { name: 1 })

//ex 4
use('bios')
db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 })

//ex 5
use('bios')
db.bios.find({ _id: 8 }, { name: 1, birth: 1 })

//ex 6
use('bios')
db.bios.find({ 'name.first': 'John' }).pretty()

//ex 7
use('bios')
db.bios.find().limit(3).pretty()

//ex 8
use('bios')
db.bios.find({}).skip(5).limit(2)

//ex 9
use('books')
db.books.countDocuments()

//ex 10
use('books')
db.books.countDocuments({ status: 'PUBLISH' })

//ex 11 
use('books')
db.books.find({}, { _id: 0, title: 1, isbn: 1, pageCount: 1 }).limit(3).pretty()