import http from "http";
import express from "express";
import "dotenv/config";
import app from "app";
const server = http.createServer(app);

function runServer() {
  console.log("list");

  server.listen(8000);
}

runServer();
