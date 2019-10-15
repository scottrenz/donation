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
  console.log('where',where)
  console.log('select * from "'+view + '"' + (where ? ' where ' + where : '' )+ ' order by 1');
  const rows= db.raw('select * from "'+view+ '"' + (where ? ' where ' + where : '') + ' order by 1');
  return rows
}

// function find(view) {
//   return db.raw('select * from '+view+' order by 1');
// }

// function findBy(view,filter) {
//   console.log('filter',filter)
//   return db(view).where(filter);
// }
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
  return db.raw('select * from "'+view+'" where '+filter);
}

async function add(table,body) {
let where = makeWhere(body)
  await db(table).insert(body);

 return findBy(table,where);
}

// async function add(table,body) {
//   const [id] = await db(table).insert(body);

//   return findById(table,id);
// }

function findById(view,id) {
  return db(view)
    .where({ id })
    .first();
}

function remove(tab,whe) {
  return  db.raw('delete from "'+tab+'" where '+whe)
   }

  //  function remove(tab,id) {
  //   return  db.raw('delete from '+tab+' where id='+id)
  //    }
    
  function update(table,where,body) {
let id=where
console.log('update "'+table+'" set '+makeWhere(body,',')+' where '+where )
return  db.raw('update "'+table+'" set '+makeWhere(body,',')+' where '+where )
     }
  
    //  function update(table,id,body) {
    //   return  db(table).where({id: id}).update(body)
    //    }
          