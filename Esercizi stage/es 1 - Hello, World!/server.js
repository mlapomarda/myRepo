const express = require('express');
const app = express();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ article: [] }).write();

db.get('article').push({ id: 1, title: 'Article 1', img: 'tech.jpg', descr: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'},
                       { id: 2, title: 'Article 2', img: 'tech.jpg', descr: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'},
                       { id: 3, title: 'Article 3', img: 'tech.jpg', descr: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'},
                       { id: 4, title: 'Article 4', img: 'tech.jpg', descr: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'}
                      ).write();



app.use(express.static('pages'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/articles', (req, res) => {
  res.send(db);
});

app.post('/articles',(req, res) => {
  let id = Number(req.body.id);
  let title = req.body.title;
  let img = req.body.img;
  let descr = req.body.descr;
  db.get('article').push({ id: id, title: title, img: img, descr: descr}).write();
  res.send(db);
});

app.get('/articles/:id', (req, res) => {
  let art = db.get('article').value();
  for(let i=0; i < art.length; i++){
    if(art[i].id == req.params.id)  res.send(art[i]);
  }
});

app.listen(3000);
