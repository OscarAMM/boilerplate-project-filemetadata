var express = require('express');
var cors = require('cors');
require('dotenv').config();
var app = express();
var multer = require('multer');
var upload = multer({dest: 'uploads/'})

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

app.post('/api/fileanalyse', upload.single('upfile'), (req,res) => {
  let filename = req.file.originalname;
  let type = req.file.mimetype;
  let size = req.file.size;
  res.json({
    name: filename,
    type: type,
    size: size
  });
});
