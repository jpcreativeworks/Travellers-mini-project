const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

// Reader.hasOne(LibraryCard, {
//   foreignKey: 'reader_id',
//   onDelete: 'CASCADE',
// });

// A reader can have many books
Traveller.hasMany(Location, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});
// TODO: create locations have many travellers many to many assocciation 
Location.belongsToMany(Traveller, {through: Trip})

// // A book belongs to a single reader
// Book.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });

// LibraryCard.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });

module.exports = { Traveller, Location, Trip };
