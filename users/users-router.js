const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const Users = require('../users/users-model.js');
const secrets = require('../config/secrets.js'); //<<<<<<<

// async function doit () {


// await Users.add('campaign',{ "name":"Save the Whales","description":"Stop people from killing whales","goal":1000000 });
// await Users.add('campaign',{ "name":"Feed the Children","description":"Help starving children","goal":50000 });
// await Users.add('campaign',{ "name":"Stop Insomnia","description":"Help people sleep","goal":60000 });

// }

// doit()

router.get('/', (req, res) => {
    Users.find('route')
      .then(user => {
  // console.log('get route',user)
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });

  router.get('/member/user', (req, res) => {
      Users.find('usermember')
        .then(user => {
    // console.log('get user',user)
          res.status(200).json(user);
        })
        .catch(error => {
          res.status(500).json(error+'');
        });
    });

  router.get('/member/board', (req, res) => {
    Users.find('boardmember')
      .then(user => {
  // console.log('get user',user)
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
  
  router.get('/member/campaign', (req, res) => {
    Users.find('campaignmember')
      .then(user => {
  // console.log('get user',user)
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
  
  router.get('/campaign', (req, res) => {
    Users.find('campaign')
      .then(user => {
  // console.log('get user',user)
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });

  router.get('/member', (req, res) => {
    Users.find('member')
      .then(user => {
  // console.log('get user',user)
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
  
  router.get('/donor', (req, res) => {
    Users.find('donor')
      .then(user => {
  // console.log('get user',user)
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
  
  router.get('/donation', (req, res) => {
    Users.find('donation')
      .then(user => {
  // console.log('get user',user)
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
  
  router.get('/campaign/donation', (req, res) => {
    Users.find('campaigndonation')
      .then(user => {
  // console.log('get user',user)
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
  
  router.get('/campaign/donate', (req, res) => {
    Users.find('campdonate')
      .then(user => {
  // console.log('get user',user)
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
  
  router.get('/campaign/donor', (req, res) => {
    Users.find('campaigndonor')
      .then(user => {
  // console.log('get user',user)
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
  
  router.get('/camp/donor', (req, res) => {
    Users.find('campdonor')
      .then(user => {
  // console.log('get user',user)
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });

  router.get('/camp/don', (req, res) => {
    Users.find('campdons')
      .then(user => {
  // console.log('get user',user)
        res.status(200).json(user);
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });

  router.delete('/member/:id', (req, res) => {
    let id = req.params.id;
   // console.log('id',id)
    Users.remove('member',id)
      .then(removed => {
          res.status(200).json(removed); 
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
  
  router.delete('/campaign/:id', (req, res) => {
    let id = req.params.id;
   // console.log('id',id)
    Users.remove('campaign',id)
      .then(removed => {
          res.status(200).json(removed); 
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
  
  router.delete('/donor/:id', (req, res) => {
    let id = req.params.id;
   // console.log('id',id)
    Users.remove('donor',id)
      .then(removed => {
          res.status(200).json(removed); 
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
  
  router.delete('/donation/:id', (req, res) => {
    let id = req.params.id;
   // console.log('id',id)
    Users.remove('donation',id)
      .then(removed => {
          res.status(200).json(removed); 
      })
      .catch(error => {
        res.status(500).json(error+'');
      });
  });
  

  router.post('/donation', (req, res) => {
    // console.log('id',req.params.id)
     Users.add('donation',req.body)
       .then(updated => {
           res.status(201).json(updated); 
       })
       .catch(error => {
         res.status(500).json(error+'');
       });
   });

   router.post('/donor', (req, res) => {
    // console.log('id',req.params.id)
     Users.add('donor',req.body)
       .then(updated => {
           res.status(201).json(updated); 
       })
       .catch(error => {
         res.status(500).json(error+'');
       });
   });

   router.post('/campaign/donation', (req, res) => {
    // console.log('id',req.params.id)
     Users.add('campaigndonation',req.body)
       .then(updated => {
           res.status(201).json(updated); 
       })
       .catch(error => {
         res.status(500).json(error+'');
       });
   });

   router.post('/campaign', (req, res) => {
    // console.log('id',req.params.id)
     Users.add('campaign',req.body)
       .then(updated => {
           res.status(201).json(updated); 
       })
       .catch(error => {
         res.status(500).json(error+'');
       });
   });

   router.put('/donation/:id', (req, res) => {
    // console.log('id',req.params.id)
     Users.update('donation',req.params.id,req.body)
       .then(updated => {
           res.status(201).json('updated '+updated); 
       })
       .catch(error => {
         res.status(500).json(error+'');
       });
   });

   router.put('/donor/:id', (req, res) => {
    // console.log('id',req.params.id)
     Users.update('donor',req.params.id,req.body)
       .then(updated => {
           res.status(201).json('updated '+updated); 
       })
       .catch(error => {
         res.status(500).json(error+'');
       });
   });
   router.put('/member/:id', (req, res) => {
    // console.log('id',req.params.id)
    let user = req.body;
    if(req.body.password)
    {
        const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
        user.password = hash;      
    }
     Users.update('member',req.params.id,user)
       .then(updated => {
           res.status(201).json('updated '+updated); 
       })
       .catch(error => {
         res.status(500).json(error+'');
       });
   });

   router.put('/campaign/:id', (req, res) => {
    // console.log('id',req.params.id)
     Users.update('campaign',req.params.id,req.body)
       .then(updated => {
           res.status(201).json('updated '+updated); 
       })
       .catch(error => {
         res.status(500).json(error+'');
       });
   });

   router.put('/campaign/donation/:id', (req, res) => {
    // console.log('id',req.params.id)
     Users.update('campaigndonation',req.params.id,req.body)
       .then(updated => {
           res.status(201).json('updated '+updated); 
       })
       .catch(error => {
         res.status(500).json(error+'');
       });
   });

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
