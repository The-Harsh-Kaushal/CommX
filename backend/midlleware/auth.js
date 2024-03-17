const express = require("express");
const jwt = require("jsonwebtoken");
const UserModal = require("../modals/UserModal");


const protect = async (req, res, next) => {
    const BearerToken = req.header("AuthToken"); 
    if (!BearerToken) {
        return res.status(400).json("No token No permisson");
    }
    try {
        const UserID = await jwt.verify(BearerToken, process.env.JWT_SECRET);
        req.user = await UserModal.findById(UserID.user.id).select("-password");
        next();
    } catch (error) {
      console.log(error.message);
        console.log("something went wrong");
        res.status(400).json("bad req");
    }
};

module.exports = protect;
