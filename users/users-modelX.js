const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update,
  makeWhere
};

function find(view,where) {
  console.log('select * from '+view + (where ? ' where ' + where : '' )+ ' order by 1');
  return db.raw('select * from '+view + (where ? ' where ' + where : '') + ' order by 1');
}
function makeWhere(body,conn) {
  if(!conn)
  conn='and'
  let where = ''
let i=0
  for (let [key, value] of Object.entries(body)) {
    if(!i)
    where = where + `${key} = '${value}'`
    else
    where = where  + ` ${conn} ${key} = '${value}'`
    console.log(`${key}: ${value}`);
    i++
  }
  console.log('where',where)
  return where
}

function findBy(view,filter) {
  console.log('filter',filter)
  return db.raw('select * from '+view+' where '+filter);
}

async function add(table,body) {
let where = makeWhere(body)
  await db(table).insert(body);

 return findBy(table,where);
}

function findById(view,id) {
  return db(view)
    .where({ id })
    .first();
}

function remove(table,where) {
  return  db.raw('delete from '+table+' where '+where)
   }

function update(table,where,body) {
let id=where
console.log('update '+table+' set '+makeWhere(body,',')+' where '+where )
return  db.raw('update '+table+' set '+makeWhere(body,',')+' where '+where )
     }
