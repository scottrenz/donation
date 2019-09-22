const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find(view) {
  return db.raw('select * from '+view+' order by 1');
}

function findBy(view,filter) {
  return db(view).where(filter);
}

async function add(table,body) {
  const [id] = await db(table).insert(body);

  return findById(table,id);
}

function findById(view,id) {
  return db(view)
    .where({ id })
    .first();
}


function remove(tab,id) {
  return  db.raw('delete from '+tab+' where id='+id)
   }
  
function update(table,id,body) {
  return  db(table).where({id: id}).update(body)
   }
    