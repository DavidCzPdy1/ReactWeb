const fs = require('fs');
const path = require('path');

const filterData = (data, query) => {
  let isEqual = ["type", "name", "id"]
  for (let key of isEqual) {
    if (query[key]) data = data.filter(n => n[key] === query[key])
  }

  let isPresent = ["version", "structure", "special"]
  for (let key of isEqual) {
    if (query[key]) data = data.filter(n => n[key].includes(query[key]))
  }

  if (query.item) data.filter(n => n.items.find(i => i.name == query.item))
    
  return data
}

module.exports = (app) => {

  let data = JSON.parse(fs.readFileSync(path.join(__dirname, './data.json'), 'utf8'));
  
  app.get("/", (req, res) => {
    res.json(
      {
        success: true,
        timestamp: new Date().getTime()
      }
    );

  });

  app.get('/findFarm', (req, res) => {
    res.json(
      {
        success: true,
        timestamp: new Date().getTime(),
        data: filterData(data, req.query)
      }
    );
  })
  
}