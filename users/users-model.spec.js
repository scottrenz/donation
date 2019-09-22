const axios = require('axios');
const Users = require('./users-model.js');
const db = require('../database/dbConfig.js');

describe('users model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  it('should set environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('add()', () => {
    it('should add users into the db', async () => {
      // add a record
      await Users.add({ username: 'Gaffer', password: 'pass' });
      await Users.add({ username: 'Frodo', password: 'pass' });

      let users = await db('users');

      // assert the record was added
      expect(users).toHaveLength(2);
    });

    it('should add users into the db', async () => {
      // add a record
      const userid = await Users.add({ username: 'Gaffer', password: 'pass' });
// console.log('user id',userid.id)
const id = userid.id

      let user = await db('users')
        .where({ id })
        .first();

      // assert the record was added
      expect(user.username).toBe('Gaffer');
    });
  });

  describe('axios get', () => {
    it('should get jokes from the site', async () => {
        const requestOptions = {
          headers: { accept: 'application/json' },
        };
      
        let jokes = await  axios.get('https://icanhazdadjoke.com/search', requestOptions)
        expect(jokes.data.results.length).toBe(20);
      });
      it('should get jokes from the site', async () => {
        const requestOptions = {
          headers: { accept: 'application/json' },
        };
      
        let jokes = await  axios.get('https://icanhazdadjoke.com/search', requestOptions)
        expect(jokes.data.results).toHaveLength(20);
      });
    
  });
  
  describe('find()', () => {
    it('should find users from the db', async () => {
        let users = await Users.find();
        
        expect(users).toHaveLength(0);
      });
  
      it('should find users from the db', async () => {
        const userid = await Users.add({ username: 'Gaffer', password: 'pass' });

        let users = await Users.find();
        
        expect(users).toHaveLength(1);
      });
  
      });
  
  describe('findBy()', () => {
    it('should find by users from the db', async () => {
        const userid = await Users.add({ username: 'Gaffer', password: 'pass' });
  // console.log('user id',userid.id)
  const id = userid.id
        let users = await Users.findBy({id: id});
        
        expect(users).toHaveLength(1);
      });
  
      it('should find by users from the db', async () => {
        const userid = await Users.add({ username: 'Gaffer', password: 'pass' });
  // console.log('user id',userid.id)
  const username = userid.username
        let users = await Users.findBy({username: username});
        
        expect(users).toHaveLength(1);
      });
  
      });

  describe('findById(id)', () => {
    it('should find by id users from the db', async () => {
      const userid = await Users.add({ username: 'Gaffer', password: 'pass' });
// console.log('user id',userid.id)
const id = userid.id
      let users = await Users.findById(id);
   //   console.log('findbyid users',users)
      expect(users.id).toBe(1);
    });

  });

  describe('remove()', () => {
    it('should delete a user from the db', async () => {
        // delete a record
        // await Users.add({ username: 'Gaffer' });
        const userid = await Users.add({ username: 'Gaffer', password: 'pass' });
        const id = userid.id
        await Users.remove(id);
        const userid2 = await Users.add({ username: 'Frodo', password: 'pass' });
        const id2 = userid2.id
        await Users.remove(id2);
  
        let users = await db('users');
  
        // assert the record was added
        expect(users).toHaveLength(0);
      });
  
      it('should delete a user from the db', async () => {
        // delete a record
        // await Users.add({ username: 'Gaffer' });
        const userid = await Users.add({ username: 'Joe', password: 'pass' });
        const id = userid.id
        await Users.remove(id);
        const userid2 = await Users.add({ username: 'Moe', password: 'pass' });
        const id2 = userid2.id
        await Users.remove(id2);
  
        let users = await db('users');
  
        // assert the record was added
        expect(users).toHaveLength(0);
      });
  
      });


});
