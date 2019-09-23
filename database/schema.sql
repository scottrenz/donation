--
-- File generated with SQLiteStudio v3.2.1 on Mon Sep 23 09:51:37 2019
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: campaign
DROP TABLE IF EXISTS campaign;

CREATE TABLE campaign (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        VARCHAR UNIQUE
                        NOT NULL,
    description VARCHAR,
    goal        REAL,
    CHECK (goal >= 0 AND 
           goal < 100000000000000) 
);

INSERT INTO campaign (
                         id,
                         name,
                         description,
                         goal
                     )
                     VALUES (
                         1,
                         'Save the Whales',
                         'Stop people from killing whales',
                         1000000.
                     );

INSERT INTO campaign (
                         id,
                         name,
                         description,
                         goal
                     )
                     VALUES (
                         2,
                         'Feed the Children',
                         'Help starving children',
                         50000.0
                     );

INSERT INTO campaign (
                         id,
                         name,
                         description,
                         goal
                     )
                     VALUES (
                         3,
                         'Stop Insomnia',
                         'Help people sleep',
                         60000.0
                     );


-- Table: campaigndonation
DROP TABLE IF EXISTS campaigndonation;

CREATE TABLE campaigndonation (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    donationid INTEGER REFERENCES donation (id) 
                       NOT NULL,
    campaignid INTEGER REFERENCES campaign (id) 
                       NOT NULL
);

INSERT INTO campaigndonation (
                                 id,
                                 donationid,
                                 campaignid
                             )
                             VALUES (
                                 1,
                                 1,
                                 2
                             );

INSERT INTO campaigndonation (
                                 id,
                                 donationid,
                                 campaignid
                             )
                             VALUES (
                                 2,
                                 2,
                                 1
                             );

INSERT INTO campaigndonation (
                                 id,
                                 donationid,
                                 campaignid
                             )
                             VALUES (
                                 3,
                                 3,
                                 2
                             );


-- Table: donation
DROP TABLE IF EXISTS donation;

CREATE TABLE donation (
    id          INTEGER  PRIMARY KEY AUTOINCREMENT,
    description VARCHAR,
    money       INTEGER,
    value       REAL     DEFAULT (0),
    location    VARCHAR,
    date        DATETIME,
    donorid     INTEGER  REFERENCES donor (id) 
                         NOT NULL,
    CHECK ( (money = 1 OR 
             money = 0) AND 
            (date IS NULL OR 
             (date(date) IS NOT NULL AND 
              date(date) > date('now', '-5 years') AND 
              date(date) < date('now', '+5 years') ) ) ) 
);

INSERT INTO donation (
                         id,
                         description,
                         money,
                         value,
                         location,
                         date,
                         donorid
                     )
                     VALUES (
                         1,
                         '$5000 for Feed the Children',
                         1,
                         321.0,
                         'Feed the children campaign',
                         '2019-09-21',
                         1
                     );

INSERT INTO donation (
                         id,
                         description,
                         money,
                         value,
                         location,
                         date,
                         donorid
                     )
                     VALUES (
                         2,
                         '$5000 for save the whales',
                         1,
                         5000.0,
                         'save the whales campaign',
                         '2019-09-21',
                         2
                     );

INSERT INTO donation (
                         id,
                         description,
                         money,
                         value,
                         location,
                         date,
                         donorid
                     )
                     VALUES (
                         3,
                         '$1000 for Feed the Children',
                         1,
                         1000.0,
                         'Feed the children campaign',
                         '2019-09-21',
                         3
                     );

INSERT INTO donation (
                         id,
                         description,
                         money,
                         value,
                         location,
                         date,
                         donorid
                     )
                     VALUES (
                         4,
                         '$200 for save the sleepers',
                         1,
                         200.0,
                         'sleepers campaign headquarters',
                         '2019-09-21',
                         4
                     );


-- Table: donor
DROP TABLE IF EXISTS donor;

CREATE TABLE donor (
    id      INTEGER  PRIMARY KEY AUTOINCREMENT,
    name    VARCHAR  NOT NULL,
    email   VARCHAR,
    phone   VARCHAR,
    address VARCHAR,
    comdate DATETIME,
    comtype VARCHAR,
    CHECK ( (email IS NULL OR 
             email LIKE '%_@%_.%_') AND 
            (comdate IS NULL OR 
             (date(comdate) IS NOT NULL AND 
              date(comdate) > date('now', '-5 years') AND 
              date(comdate) < date('now', '+5 years') ) ) ) 
);

INSERT INTO donor (
                      id,
                      name,
                      email,
                      phone,
                      address,
                      comdate,
                      comtype
                  )
                  VALUES (
                      1,
                      'Waldo Wayne',
                      'waldo@waldo.com',
                      '212-555-5555',
                      '123 Park Lane, Geneva, WI',
                      '2019-09-21',
                      'phone'
                  );

INSERT INTO donor (
                      id,
                      name,
                      email,
                      phone,
                      address,
                      comdate,
                      comtype
                  )
                  VALUES (
                      2,
                      'Jane Wayne',
                      'jayne@waldo.com',
                      '212-555-5555',
                      '123 Park Lane, Geneva, WI',
                      '2019-09-20',
                      'email'
                  );

INSERT INTO donor (
                      id,
                      name,
                      email,
                      phone,
                      address,
                      comdate,
                      comtype
                  )
                  VALUES (
                      3,
                      'Ralph Wayne',
                      'ralph@waldo.com',
                      '212-555-5555',
                      '123 Park Lane, Geneva, WI',
                      '2019-09-21',
                      'phone'
                  );

INSERT INTO donor (
                      id,
                      name,
                      email,
                      phone,
                      address,
                      comdate,
                      comtype
                  )
                  VALUES (
                      4,
                      'Mary Wayne',
                      'mary@waldo.com',
                      '212-555-5555',
                      '123 Park Lane, Geneva, WI',
                      '2019-09-21',
                      'phone'
                  );


-- Table: member
DROP TABLE IF EXISTS member;

CREATE TABLE member (
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR NOT NULL
                     UNIQUE,
    password VARCHAR NOT NULL,
    type     VARCHAR,
    CHECK (type = 'board' OR 
           type = 'user' OR 
           type = 'campaign') 
);

INSERT INTO member (
                       id,
                       username,
                       password,
                       type
                   )
                   VALUES (
                       1,
                       'user1',
                       '$2a$10$BBlrEq5/4ICQEJqXxA52QeAoief9bK8A/8kO8Q5KqlIDmdolayN/i',
                       'board'
                   );

INSERT INTO member (
                       id,
                       username,
                       password,
                       type
                   )
                   VALUES (
                       2,
                       'user2',
                       '$2a$10$m/jfO.aWCieTbU9rEIDQ4.5uh5ycdd16SB79kZKo54r9tj5AET79O',
                       'user'
                   );

INSERT INTO member (
                       id,
                       username,
                       password,
                       type
                   )
                   VALUES (
                       3,
                       'user3',
                       '$2a$10$uiVSELrEo1EfR6hFbV.lu.vhb/c1F8TpCb31huXV0H4Xjaixg3Ege',
                       'campaign'
                   );


-- Table: route
DROP TABLE IF EXISTS route;

CREATE TABLE route (
    id    INTEGER       PRIMARY KEY AUTOINCREMENT,
    route VARCHAR (255) UNIQUE
                        NOT NULL,
    body  VARCHAR (255) 
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
                      ' { username: ''user1'', password: ''something'', type: ''board'',email: ''waldo@waldo.com'',phone: ''212-555-5555'',address: ''123 Park Lane, Geneva, WI'' }'
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
                      ' { username: ''user1'', password: ''something'',email: ''waldo@waldo.com'',phone: ''212-555-5555'',address: ''123 Park Lane, Geneva, WI''}'
                  );

INSERT INTO route (
                      id,
                      route,
                      body
                  )
                  VALUES (
                      28,
                      'post (/donate/register/board)',
                      ' { username: ''user1'', password: ''something'',email: ''waldo@waldo.com'',phone: ''212-555-5555'',address: ''123 Park Lane, Geneva, WI''}'
                  );

INSERT INTO route (
                      id,
                      route,
                      body
                  )
                  VALUES (
                      29,
                      'post (/donate/register/campaign)',
                      ' { username: ''user1'', password: ''something'',email: ''waldo@waldo.com'',phone: ''212-555-5555'',address: ''123 Park Lane, Geneva, WI'' }'
                  );

INSERT INTO route (
                      id,
                      route,
                      body
                  )
                  VALUES (
                      30,
                      'post (/donate/login)',
                      ' { username: ''user1'', password: ''something'' }'
                  );


-- View: boardmember
DROP VIEW IF EXISTS boardmember;
CREATE VIEW boardmember AS
    SELECT *
      FROM member
     WHERE type = 'board';


-- View: campaigndonor
DROP VIEW IF EXISTS campaigndonor;
CREATE VIEW campaigndonor AS
    SELECT DISTINCT campaign.id AS campaign_id,
                    campaign.name AS c_name,
                    campaign.description AS c_description,
                    campaign.goal AS c_goal,
                    donor.id AS donor_id,
                    donor.name AS d_name,
                    donor.email AS d_email,
                    donor.phone AS d_phone,
                    donor.address AS d_address,
                    donor.comdate AS d_comdate,
                    donor.comtype AS d_comtype
      FROM campaign,
           donor,
           donation,
           campaigndonation
     WHERE donor.id = donation.donorid AND 
           donation.id = campaigndonation.donationid AND 
           campaign.id = campaigndonation.campaignid;


-- View: campaignmember
DROP VIEW IF EXISTS campaignmember;
CREATE VIEW campaignmember AS
    SELECT *
      FROM member
     WHERE type = 'campaign';


-- View: campdonate
DROP VIEW IF EXISTS campdonate;
CREATE VIEW campdonate AS
    SELECT DISTINCT campaign.id AS campaign_id,
                    campaign.name AS c_name,
                    campaign.description AS c_description,
                    campaign.goal AS c_goal,
                    donation.id AS donation_id,
                    donation.description AS d_description,
                    donation.money AS d_money,
                    donation.value AS d_value,
                    donation.location AS d_location,
                    donation.date AS d_date,
                    donation.donorid AS d_donorid
      FROM campaign,
           donation,
           campaigndonation
     WHERE donation.id = campaigndonation.donationid AND 
           campaign.id = campaigndonation.campaignid;


-- View: campdonor
DROP VIEW IF EXISTS campdonor;
CREATE VIEW campdonor AS
    SELECT campaign_id,
           c_Name,
           donor_id,
           d_Name,
           d_Email,
           d_phone,
           d_address,
           d_comdate,
           d_comtype
      FROM campaigndonor;


-- View: campdons
DROP VIEW IF EXISTS campdons;
CREATE VIEW campdons AS
    SELECT DISTINCT campaign.id AS campaign_id,
                    campaign.*,
                    donor.id AS donor_id,
                    donor.*,
                    donation.id AS donation_id,
                    donation.*
      FROM campaign,
           donor,
           donation,
           campaigndonation
     WHERE donor.id = donation.donorid AND 
           donation.id = campaigndonation.donationid AND 
           campaign.id = campaigndonation.campaignid;


-- View: usermember
DROP VIEW IF EXISTS usermember;
CREATE VIEW usermember AS
    SELECT *
      FROM member
     WHERE type = 'user';


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
