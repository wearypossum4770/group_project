import express from "express";
import axios from "axios";
import v4 from "uuid";
import bodyParser from "body-parser";
import NodeCouchDb from "node-couchdb";

const couch = new NodeCouchDb({
  auth: {
    host: "localhost",
    protocol: "http",
    port: 5984,
    user: "test1",
    pass: "root",
  },
});

const couchAuth = new NodeCouchDb({ auth: { user: "login", pass: "secret" } });

const dbname = "users";
const views = {
  userViewURL: "_design/users/_view/user-view",
  permsViewURL: "_design/perms/_view/perms",
};

const documentID = "16eea2ede544c04b0a3b68b8e70018d2";

export const getDocument = (databaseName, documentID) =>
  couch.get(databaseName, documentID).then(
    ({ data, headers, status }) => {
      console.log(data);
      console.log(headers);
      console.log(status);
    },
    (err) => console.log(err)
  );

export const insertDocument = () =>
  couch
    .insert("users", {
      _id: "document_id",
      _selfid: v4(),
      field: [],
    })
    .then(
      ({ data, headers, status }) => {
        console.log(data);
        console.log(headers);
        console.log(status);
      },
      (err) => console.log(err)
    );

export const updateDocument = () =>
  couch
    .update("users", {
      _id: "document_id",
      _rev: "",
      field: "",
    })
    .then(
      ({ data, headers, status }) => {
        console.log(data);
        console.log(headers);
        console.log(status);
      },
      (err) => console.log(err)
    );
