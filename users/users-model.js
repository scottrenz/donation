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
  console.log('select * from "'+view + '"' + (where ? ' where ' + where : '' ));
  const rows= db.raw('select * from "'+view+ '"' + (where ? ' where ' + where : ''));
  return rows
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
  return db.raw('select * from "'+view+'" where '+filter);
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

function remove(tab,whe) {
  return  db.raw('delete from "'+tab+'" where '+whe)
   }

  function update(table,where,body) {
let id=where
console.log('update "'+table+'" set '+makeWhere(body,',')+' where '+where )
return  db.raw('update "'+table+'" set '+makeWhere(body,',')+' where '+where )
     }

    //  return db.raw(
 const cr=     ( `create view student_course_enrollment as
Select
c.first_day,
c.last_day,
c.result,
c.notes as course_enrollment_notes,
g.course_id,
g.legacy_id,
g.term,
g.course_type,
g.gender general_course_gender,
g.group_type,
g.grade_level,
g.level,
g.section,
g.subsection,
g.hourly_rate,
g.days,
g.room,
g.start_time,
g.end_time,
g.teacher,
g.notes as general_course_notes,
g.status,
s.student_id,
s.cpr,
s.registration_date,
s.first_name,
s.additional_names,
s.gender as student_gender,
s.birthdate,
s.school_grade,
s.school_name,
s.grade_updated,
s.home_telephone,
s.mobile_telephone,
s.block,
s.road,
s.building,
s.flat,
s.email,
s.notes as student_notes,
s.preferred_contact_method,
s.no_call,
s.delinquent_account,
s.expelled
 from "CourseEnrollment" as c, "GeneralCourse" as g, "Student" as s
Where c.student_id = s.student_id
And c.course_id = g.course_id
`)
