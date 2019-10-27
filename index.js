#!/usr/bin/env node
// console.log('hello world')

let program = require('commander')
let createProject = require('./createProject')
let inquirer = require('inquirer') // 交互式工具
let path = require('path')
let fs = require('fs')

let promptList = [
  {
    type: 'input',
    message: '输入项目名：',
    name: 'name',
    default: 'project-name'
  },
  /*{
    type: 'confirm',
    message: '是否使用监听？',
    name: 'watch',
    prefix: '前缀'
  },*/
  /*{
    type: 'list',
    message: '请选择一种水果:',
    name: 'fruit',
    choices: [
      'Apple',
      'Pear',
      'Banana'
    ],
    filter: function(val){
      return val.toLowerCase()
    }
  }*/
  {
    type: 'list',
    message: '请选择项目类型',
    name: 'type',
    choices: fs.readdirSync(path.join(__dirname, 'projects'))
  }
]

inquirer.prompt(promptList).then(answer => {
  console.log(answer)
})

/*
program.version('v0.0.1')
  .option('-t,--type <name>', 'project type')
  .option('-n,--type <name>', 'project type')

program.command('create <name>').action(function(name){
  console.log(name, program.type)
  createProject(name, program.type)
})

program.parse(process.argv)*/
