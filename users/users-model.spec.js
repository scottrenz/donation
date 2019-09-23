const axios = require('axios');
const Users = require('./users-model.js');
const db = require('../database/dbConfig.js');

describe('users model', () => {
  beforeEach(async () => {
    await db('campaign').truncate();
    await db.raw('delete from member where id > 3')
    await db.raw(`update sqlite_sequence set seq = 3 where name = 'member'`)
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
      let users = await db('member');

      // assert the records were added
      expect(users).toHaveLength(3);
    });

  });

  describe('axios get', () => {
    it('should get routes from the site', async () => {
      
        let routes = await  axios.get('https://donation-management.herokuapp.com/donate')
        expect(routes.data.length).toBe(30);
      });
      it('should get routes from the site', async () => {
      
        let routes = await  axios.get('https://donation-management.herokuapp.com/donate')
        expect(routes.data).toHaveLength(30);
      });
    
  });
  
  describe('find()', () => {
    it('should find users from the db', async () => {
        let users = await Users.find('member');
        
        expect(users).toHaveLength(3);
      });
  
      it('should find users from the db', async () => {
        const userid = await Users.add('member',{ username: 'Gaffer', password: 'pass', type: 'user' });

        let users = await Users.find('member');
        expect(users).toHaveLength(4);
      });
  
      });
  
  describe('findBy()', () => {
    it('should find by users from the db', async () => {
  const userid = await Users.add('member',{ username: 'Gaffer', password: 'pass', type: 'user' });
  const id = 4
        let users = await Users.findBy('member',{id: id});
        
        expect(users).toHaveLength(1);
      });
  
      it('should find by users from the db', async () => {
//        const userid = await Users.add({ username: 'Gaffer', password: 'pass' });
  // console.log('user id',userid.id)
  // const username = userid.username
  const userid = await Users.add('member',{ username: 'Gaffer', password: 'pass', type: 'user' });
  let users = await Users.findBy('member',{username: 'Gaffer'});
    console.log('second find by',users)    
        expect(users).toHaveLength(1);
      });
  
      });

  describe('findById(id)', () => {
    it('should find by id users from the db', async () => {
const id = 4
      let users = await Users.findById('member',1);
   //   console.log('findbyid users',users)
      expect(users.id).toBe(1);
    });

  });

  describe('remove()', () => {
    it('should delete a user from the db', async () => {
        // delete a record
        // await Users.add({ username: 'Gaffer' });
        const userid = await Users.add('member',{ username: 'Frodo', password: 'pass', type: 'board' });
        const id = userid.id
        await Users.remove('member',id);
  
        let users = await db('member');
  
        // assert the record was added
        expect(users).toHaveLength(3);
      });
  
      it('should delete a user from the db', async () => {
        // delete a record
        // await Users.add({ username: 'Frodo' });
        await Users.remove('member',4);
  
        let users = await db('member');
  
        // assert the record was added
        expect(users).toHaveLength(3);
      });
  
      });


});
