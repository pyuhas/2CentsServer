const knex = require('./connection.js')

function list() {
  return knex('cities')
}

function read(id) {
  return knex('cities').where('id', id).first()
}

function create(city) {
  return knex('cities')
    .insert(city)
    .returning('*')
    .then(record => record[0])
}

function update(id, city) {
  return knex('cities')
  .update(city)
  .where('id', id)
  .returning('*')
  .then(record => record[0])
}

function remove(id){
  return knex('cities').delete().where('id', id)
}


module.exports = {
  list,
  read,
  create,
  update,
  remove
};
