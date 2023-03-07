
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


IMG
![Screenshot 2023-03-07 204754](https://user-images.githubusercontent.com/118736912/223549698-a2594f53-ee05-458d-b0ca-11e42234b437.png)

![Screenshot 2023-03-07 212919](https://user-images.githubusercontent.com/118736912/223557373-b69b2205-03c9-4884-b3a2-1a5612c66539.png)


VIDEO
* https://drive.google.com/file/d/1zYn86Gg4B4D4AIEIwNipAeyKDQ8kV59i/view?usp=sharing

## Badges

 * [![General badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://shields.io/)

 * ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

 * ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

 *  ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)


## Resources

- https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
- https://www.npmjs.com/package/enquirer#-install
- https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
- https://getfrontend.tips/create-an-array-with-conditional-elements/
- https://www.w3schools.com/nodejs/nodejs_filesystem.asp
- https://www.npmjs.com/package/enquirer#basicauth-prompt
- https://en.wikipedia.org/wiki/ANSI_escape_code#Colors