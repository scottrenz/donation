--
-- File generated with SQLiteStudio v3.2.1 on Sun Sep 22 16:11:25 2019
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: route
DROP TABLE IF EXISTS route;

CREATE TABLE route (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 route VARCHAR (255) UNIQUE
 NOT NULL,
 body VARCHAR (255) 
);

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 1,
 'get (/donate)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 2,
 'get (/donate/member/user)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 3,
 'get (/donate/member/board)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 4,
 'get (/donate/member/campaign)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 5,
 'get (/donate/campaign)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 6,
 'get (/donate/member)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 7,
 'get (/donate/donor)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 8,
 'get (/donate/donation)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 9,
 'get (/donate/campaign/donation)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 10,
 'get (/donate/campaign/donate)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 11,
 'get (/donate/campaign/donor)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 12,
 'get (/donate/camp/donor)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 13,
 'get (/donate/camp/don)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 14,
 'delete (/donate/member/:id)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 15,
 'delete (/donate/campaign/:id)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 16,
 'delete (/donate/donor/:id)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 17,
 'delete (/donate/donation/:id)',
 NULL
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 18,
 'post (/donate/donation)',
 ' {description: ''$5000 for Feed the Children'',money: 1,value: 321, location: ''Feed the children campaign'',date: ''2019-09-21'', donorid: 1 }'
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 19,
 'post (/donate/donor)',
 ' {name: ''Waldo Wayne'',email: ''waldo@waldo.com'',phone: ''212-555-5555'',address: ''123 Park Lane, Geneva, WI'',comdate: ''2019-09-21'',comtype: ''phone''}'
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 20,
 'post (/donate/campaign/donation)',
 ' { donationid: 1, campaignid: 2 }'
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 21,
 'post (/donate/campaign)',
 ' { name: ''Save the Whales'', description: ''Stop people from killing whales'', goal: 1000000 }'
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 22,
 'put (/donate/donation/:id)',
 ' { description: ''$5000 for Feed the Children'', money: 1, value: 321, location: ''Feed the children campaign'', date: ''2019-09-21'',donorid: 1 }'
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 23,
 'put (/donate/donor/:id)',
  ' { name: ''Waldo Wayne'', email: ''waldo@waldo.com'', phone: ''212-555-5555'', address: ''123 Park Lane, Geneva, WI'', comdate: ''2019-09-21'', comtype: ''phone'' }'
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 24,
 'put (/donate/member/:id)',
  ' { username: ''user1'', password: ''something'', type: ''board'' }'
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 25,
 'put (/donate/campaign/:id)',
 ' {name: ''Save the Whales'', description: ''Stop people from killing whales'', goal: 1000000 }'
 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 26,
 'put (/donate/campaign/donation/:id)',
  ' { donationid: 1, campaignid: 2 }'

 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 27,
 'post (/donate/register/user)',
 ' { username: ''user1'', password: ''something'' }'

 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 28,
 'post (/donate/register/board)',
 ' { username: ''user1'', password: ''something''}'

 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 29,
 'post (/donate/register/campaign)',
 ' { username: ''user1'', password: ''something'' }'

 );

INSERT INTO route (
 id,
 route,
 body
 )
 VALUES (
 30,
 'post (/donate/login)',
 NULL
 );


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
