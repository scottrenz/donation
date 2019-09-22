const axios = require('axios');
const Users = require('./users-model.js');
const db = require('../database/dbConfig.js');

describe('users model', () => {
  beforeEach(async () => {
    await db('campaign').truncate();
  });

  it('should set environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('add()', () => {
    it('should add users into the db', async () => {
      // add a record
      await Users.add('campaign',{ "name":"Save the Whales","description":"Stop people from killing whales","goal":1000000 });
      await Users.add('campaign',{ "name":"Feed the Children","description":"Help starving children","goal":50000 });
      await Users.add('campaign',{ "name":"Stop Insomnia","description":"Help people sleep","goal":60000 });
      // [{"id":1,"name":"Save the Whales","description":"Stop people from killing whales","goal":1000000},{"id":2,"name":"Feed the Children","description":"Help starving children","goal":50000},{"id":3,"name":"Stop Insomnia","description":"Help people sleep","goal":60000}]
      let users = await db('users');

      // assert the record was added
      expect(users).toHaveLength(3);
    });

  });

  describe('axios get', () => {
    it('should get routes from the site', async () => {
        const requestOptions = {
          headers: { accept: 'application/json' },
        };
      
        let jokes = await  axios.get('https://donation-management.herokuapp.com/donate', requestOptions)
        expect(jokes.data.results.length).toBe(30);
      });
      it('should get jokes from the site', async () => {
        const requestOptions = {
          headers: { accept: 'application/json' },
        };
      
        let jokes = await  axios.get('https://icanhazdadjoke.com/search', requestOptions)
        expect(jokes.data.results).toHaveLength(30);
      });
    
  });
  
  describe('find()', () => {
    it('should find users from the db', async () => {
        let users = await Users.find('member');
        
        expect(users).toHaveLength(7);
      });
  
      it('should find users from the db', async () => {
        const userid = await Users.add('member',{ username: 'Gaffer', password: 'pass', type: 'user' });

        let users = await Users.find('member');
        
        expect(users).toHaveLength(8);
      });
  
      });
  
  describe('findBy()', () => {
    it('should find by users from the db', async () => {
//        const userid = await Users.add({ username: 'Gaffer', password: 'pass' });
  // console.log('user id',userid.id)
  const id = 1
        let users = await Users.findBy({id: id});
        
        expect(users).toHaveLength(1);
      });
  
      it('should find by users from the db', async () => {
//        const userid = await Users.add({ username: 'Gaffer', password: 'pass' });
  // console.log('user id',userid.id)
  // const username = userid.username
        let users = await Users.findBy({username: 'Gaffer'});
        
        expect(users).toHaveLength(1);
      });
  
      });

  describe('findById(id)', () => {
    it('should find by id users from the db', async () => {
 //     const userid = await Users.add({ username: 'Gaffer', password: 'pass' });
// console.log('user id',userid.id)
const id = userid.id
      let users = await Users.findById(1);
   //   console.log('findbyid users',users)
      expect(users.id).toBe(1);
    });

  });

  describe('remove()', () => {
    it('should delete a user from the db', async () => {
        // delete a record
        // await Users.add({ username: 'Gaffer' });
        const userid = await Users.add({ username: 'Frodo', password: 'pass', type: 'board' });
        const id = userid.id
        await Users.remove(id);
  
        let users = await db('member');
  
        // assert the record was added
        expect(users).toHaveLength(9);
      });
  
      it('should delete a user from the db', async () => {
        // delete a record
        // await Users.add({ username: 'Gaffer' });
        await Users.remove(8);
  
        let users = await db('member');
  
        // assert the record was added
        expect(users).toHaveLength(7);
      });
  
      });


});
