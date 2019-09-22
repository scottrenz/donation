const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const Users = require('../users/users-model.js');
const secrets = require('../config/secrets.js'); //<<<<<<<


router.get('/alive', (req, res) => {
  res.send("It's auth!");
});


router.get('/users', (req, res) => {
  console.log('req',req)
  Users.find()
    .then(user => {
console.log('user',user)
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json(error+'');
    });
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
 console.log('id',id)
  Users.remove(id)
    .then(removed => {
        res.status(201).json(removed); 
    })
    .catch(error => {
      res.status(500).json(error+'');
    });
});

router.post('/register', (req, res) => {
  console.log('req',req)
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;
console.log('user',user)
  Users.add(user)
    .then(saved => {
console.log('saved',saved)
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
  Users.findBy({ username })
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
