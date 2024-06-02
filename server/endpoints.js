const fs = require('fs');
const path = require('path');

module.exports = (app) => {

  let data = JSON.parse(fs.readFileSync(path.join(__dirname, './data.json'), 'utf8'));
  
  app.get("/", (req, res) => {
    res.json({ success: true, timestamp: new Date() });

  });

  app.get('/findFarm', (req, res) => {
    console.log(req.query)
    res.json({ success: true, timestamp: new Date(), data: data.filter(n => n.type === req.query.type)});
  })
  
}