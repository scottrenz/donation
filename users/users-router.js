const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const Users = require('../users/users-model.js');
const secrets = require('../config/secrets.js'); //<<<<<<<

router.get('/', (req, res) => {
  console.log('get req query',req.query)
  Users.find(req.query.table,req.query.where)
    .then(user => {
      res.status(200).json(user.rows);
    })
    .catch(error => {
      res.status(500).json(error+'');
    });
});
  
  router.delete('/', (req, res) => {
console.log('delete',req.query)

Users.remove(req.query.table,req.query.where)
      .then(removed => {
          res.status(200).json('number of rows removed: '+removed.rowCount); 
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
  

  router.post('/', (req, res) => {
     console.log('post',req.query)
  Users.findBy(req.query.table,Users.makeWhere(req.body))
    .then(result => {
      if(typeof(result[0]) !== 'object')
      {
        Users.add(req.query.table,req.body)
         .then(updated => {
           res.status(201).json(updated.rows); 
         })
         .catch(error => {
          res.status(500).json(error+'');
        });
       }  
      else
       {res.status(201).json(result.rows)}
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
    });

   router.put('/', (req, res) => {
     console.log('put',req.query)
     Users.update(req.query.table,req.query.where,req.body)
       .then(updated => {
           res.status(201).json('updated '+updated.rows); 
       })
       .catch(error => {
         res.status(500).json(error+'');
       });
   });

////////////////////////////////////////////////////////////////////////////
router.post('/register/student', (req, res) => {
  console.log('post',req.body)
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12); // 2 ^ n
  user.password = hash;
Users.findBy('student',Users.makeWhere({username: req.body.username}))
 .then(result => {
   if(typeof(result[0]) !== 'object')
   {
     Users.add('student',req.body)
      .then(updated => {
          const token =generateToken(user)
          updated.token=token    
        res.status(201).json(updated); 
      })
      .catch(error => {
       res.status(500).json(error+'');
     });
    }  
   else
    {
      const token =generateToken(user)
      result.token=token
        res.status(201).json(result)}
   })
   .catch(error => {
     res.status(500).json(error+'');
   });
 });

 router.post('/register/staff', (req, res) => {
  console.log('post',req.body)
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12); // 2 ^ n
  user.password = hash;
Users.findBy('staff',Users.makeWhere({username: req.body.username}))
 .then(result => {
   if(typeof(result[0]) !== 'object')
   {
     Users.add('staff',req.body)
      .then(updated => {
          const token =generateToken(user)
          updated.token=token    
        res.status(201).json(updated); 
      })
      .catch(error => {
       res.status(500).json(error+'');
     });
    }  
   else
    {
      const token =generateToken(user)
      result.token=token
        res.status(201).json(result)}
   })
   .catch(error => {
     res.status(500).json(error+'');
   });
 });

function generateToken(user) {
  const payload = {
    username: user.username,
    dept: user.department
  };
  const options = {
    expiresIn: '1d',
  };
  // bring in the secret from the secrets file
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
