
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([{
        id: 1,
        city: 'Prague',
        trip_length: 'At least one week',
        restaurants: ['Mlynec Restaurant', 'Bohemia Bagel', 'Budvarka'],
        activities: ['Take a dinner cruise and sip on Becherovka', 'Tour the Prague Beer Museum', 'Catch a show at Rock Cafe']
      }, {
        id: 2,
        city: 'Reykjavik',
        trip_length: 'At least 4 days',
        restaurants: ['Drir Frakar', 'Sjavargrillid Seafood Grill', 'Bæjarins Beztu'],
        activities: ['Take a dip at the Blue Lagoon', 'Hear some great tunes at the Iceland Airwaves Music Festival', 'Tour the Golden Circle']
      }, {
        id: 3,
        city: 'Seattle',
        trip_length: 'At least 3 days',
        restaurants: ['The Walrus and the Carpenter', 'Canlis', 'The Pink Door'],
        activities: ['Try some fresh seafood at the Pike Place Market', 'Tour the Space Needle', 'Take a walk in Discovery Park']
      }, {
        id: 4,
        city: 'Puerto Vallarta',
        trip_length: 'At least 4 days',
        restaurants: ['Ocean Grill', 'Panchos Takos', 'El Dorado Restaurant'],
        activities: ['Enjoy dinner and a show on the Pirate Ship', 'Walk along the Malecon', 'Snorkel at Islas Marietas National Park']
      }, {
        id: 5,
        city: 'Santa Fe',
        trip_length: 'At least 2 days',
        restaurants: ['Cafe Pasquals', 'Tia Sophias', 'Radish & Rye'],
        activities: ['Relax at Ten Thousand Waves Spa', 'Be a kid again at Meow Wolf', 'See the infamous staircase at Loretto Chapel']
      }]);
});
}
