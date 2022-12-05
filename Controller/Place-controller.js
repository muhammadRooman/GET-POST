const { response } = require("express");
const newtest = require("../Model/User");
//Get method




const getapi = async (req, res) => {
  try {
    const getids = await newtest.find({});
    res.send(getids);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Post method
const postapi = async (req, res) => {
  console.log("body",req.body);
  try {
    const postmethod = await newtest.create(req.body);
    res.send(postmethod);
  } catch (error) {
    res.status(400).send(error);
  }
};

//exports
exports.postapi = postapi;
exports.getapi = getapi;
