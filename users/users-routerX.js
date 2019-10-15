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
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json(error+'');
    });
});
  
  router.delete('/', (req, res) => {
console.log('delete',req.query)
    Users.remove(req.query.table,req.query.where)
      .then(removed => {
          res.status(200).json(removed); 
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
           res.status(201).json(updated); 
         })
         .catch(error => {
          res.status(500).json(error+'');
        });
       }  
      else
       {res.status(201).json(result)}
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
    });

   router.put('/', (req, res) => {
     console.log('put',req.query)
     Users.update(req.query.table,req.query.where,req.body)
       .then(updated => {
           res.status(201).json('updated '+updated); 
       })
       .catch(error => {
         res.status(500).json(error+'');
       });
   });

////////////////////////////////////////////////////////////////////////////
   router.post('/register/user', (req, res) => {
    // console.log('req',req.body)
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;
    user.type = 'user'
  // console.log('register user',user)
    Users.add('member',user)
      .then(saved => {
  // console.log('saved',saved)
        const token =generateToken(user)
        saved.token=token
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });

  router.post('/register/board', (req, res) => {
    // console.log('req',req.body)
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;
    user.type = 'board'
  // console.log('register board',user)
    Users.add('member',user)
      .then(saved => {
  // console.log('saved',saved)
        const token =generateToken(user)
        saved.token=token
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });

  router.post('/register/campaign', (req, res) => {
    // console.log('req',req.body)
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;
    user.type = 'campaign'
  // console.log('register campaign',user)
    Users.add('member',user)
      .then(saved => {
  // console.log('saved',saved)
        const token =generateToken(user)
        saved.token=token
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
      
router.post('/login', (req, res) => {
  let { username, password } = req.body;
  Users.findBy('member',{ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
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
