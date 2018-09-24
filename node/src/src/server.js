import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
var router = express.Router();
var ldap = require('ldapjs');
var promise = require('bluebird');

function ldapSearch() {
  
  //ldap.Attribute.settings.guid_format = ldap.GUID_FORMAT_B;
  var client = ldap.createClient({
    url: 'ldap://ldap/cn=cldap,ou=services,dc=cnam,dc=fr',
    timeout: 5000,
    connectTimeout: 10000
});
var opts = {
filter: '(&(uid=lelongj))',
scope: 'sub',
attributes: ['uid','givenname']
};

console.log('--- going to try to connect user ---');

try {
  client.bind('', '', function (error) {
      
    if(error){
      console.log('ERREUR');
      console.log(error.message);
          client.unbind(function(error) {if(error){console.log(error.message);} else{console.log('client disconnected');}});
      } else {
          console.log('connected');
          client.search('ou=people,o=personnel,dc=cnam,dc=fr', opts, function(error, search) {
              console.log('Searching.....');

              search.on('searchEntry', function(entry) {
                if(entry.object){
                      console.log('entry: %j ' + JSON.stringify(entry.object));
                  }
                  return entry.object;
              });

              search.on('error', function(error) {
                  console.error('error: ' + error.message);
              });

              client.unbind(function(error) {if(error){console.log(error.message);} else{console.log('client disconnected');}});
          });
      }
  });
} catch(error){
console.log(error);
  client.unbind(function(error) {if(error){console.log(error.message);} else{console.log('client disconnected');}});
  
}
}



var client = ldap.createClient({url: 'ldap://ldap/cn=admin,dc=cnam,dc=fr'});
var uid;

promise.promisifyAll(client);

function searchPromise(res, notfoundtext) {
  return new Promise(function(resolve, reject) {
    var found = false;
    res.on('searchEntry', function(entry) {
      found = true;
      resolve(entry);
    });
    res.on('error', function(e) {
      reject(e.message);
    });
    res.on('end', function() {
      if (!found) {
        reject(notfoundtext);
      } 
    });
  });
}
var credentials = {password:''};

async function trouverPersonnel() {
  await client.bindAsync('cn=admin,dc=cnam,dc=fr', 'admin')
  .then() // if it works, call doSearch
  .catch(function (err) { // if bind fails, handle it
    console.error('Error on bind', err)
  });

  return client.searchAsync('dc=cnam,dc=fr', {filter: '(&(uid=lelongj))', scope: 'sub',attributes: ['uid','sn','givenname']})
  .then(function(res) {
    return searchPromise(res, 'User isn\'t exists.');
  })
  .then(function (entry) {
    uid = entry.object.uid;
    return entry.object;
    //return client.bindAsync(entry.object.dn, credentials.password);
  })
  /*
  .then(function() {
    return client.searchAsync('cn=cldap,ou=services,dc=cnam,dc=fr', {filter: '(&(uid=lelongj))', scope: 'sub',attributes: ['uid','givenname']});
  })
  .then(function(res) {
    return searchPromise(res, 'User is not in group ');
  })
  .then(function() {
    console.log('All is ok');
  })
  .catch(function(message) {
    console.log('Error:' + message);
  })
*/
;

}
router.get('/',async function(req, res, next) {
  //res.send('respond with a resource');
  //const users = [{username: 'lelongj',id: 1}, {username: 'dupontd',id: 2}];
  //return res.json(users);
  //return res.json(await ldapSearch());
  return res.json(await trouverPersonnel());

});

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server.use('/users', router);

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ''}
        ${process.env.NODE_ENV === 'production'
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`}
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
      );
    }
  });

export default server;
