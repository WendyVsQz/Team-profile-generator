
# Team profile generator

## User Story

As a manager a user want to generate a webpage that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

```bash
node index.js
```

This is a Node.js command line application will take information about each employees based on three different roles: 
Engineer, manager & intern.

 The first class is an `Employee` parent class with the following properties and methods:       
      * `name`
      * `id`
      * `email`
      * `getName()`
      * `getId()`
      * `getEmail()`
      * `getRole()`&mdash;returns `'Employee'`     
    * The other three classes will extend `Employee`.      
    * In addition to `Employee`'s properties and methods, `Manager` will also have the following:
      * `officeNumber`
      * `getRole()`&mdash;overridden to return `'Manager'`
    * In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
      * `github`&mdash;GitHub username
      * `getGithub()`
      * `getRole()`&mdash;overridden to return `'Engineer'`
    * In addition to `Employee`'s properties and methods, `Intern` will also have the following:
      * `school`
      * `getSchool()`
      * `getRole()`&mdash;overridden to return `'Intern'`


running an html webpage according to the information provided from the user.

# DEMO



## Badges


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


## Resources

- https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
- https://www.npmjs.com/package/enquirer#-install
- https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
- https://getfrontend.tips/create-an-array-with-conditional-elements/
- https://www.w3schools.com/nodejs/nodejs_filesystem.asp
- https://www.npmjs.com/package/enquirer#basicauth-prompt
- https://en.wikipedia.org/wiki/ANSI_escape_code#Colors