const getComputers = (req, res) => {
  res.send("This is the store of our computers.");
};

const getOneComputer = (req, res) => {
  res.send("We get one computer only");
  // res.json({ id: req.params.id });
}

const addComputer = (req, res) => {
  // res.send('Here we add One Computer');
  res.json(req.body);
}

const updateComputer = (req, res) => {
  // res.send('We updated one computer');
  res.json({ id: req.params.id });
};

const deleteComputer = (req, res) => {
  res.json({ id: req.params.id });
  // res.send("Delete one computer");
}
module.exports = { getComputers, getOneComputer, addComputer, updateComputer, deleteComputer };
