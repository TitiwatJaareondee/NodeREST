const express = require('express');
const Sequelize = require('sequelize');
const app = express();

app.use(express.json());

const dbUrl = 'postgres://webadmin:RVStny62748@node56940-titiwat28-noderest.proen.app.ruk-com.cloud:11605/Books';

const sequelize = new Sequelize(dbUrl);