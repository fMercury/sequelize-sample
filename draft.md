
MySQL Community server
MySQL Workbench

https://medium.com/@prajramesh93/getting-started-with-node-express-and-mysql-using-sequelize-ed1225afc3e0
https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize#toc-creating-controllers-and-routing

npm install -g sequelize-cli
https://github.com/sequelize/cli

npm install --save sequelize

npm install --save mysql2

Initializes sequelize
After installation, let use the CLI to generate migrations, seeders, config and models directories and config file

sequelize init // final, Initializes project with sequelize cil

Successfully created models folder at "./models".
Successfully created migrations folder at "./migrations".
Successfully created seeders folder at "./seeders".


sequelize model:create --name UserProfile --attributes name:string
sequelize model:create --name Infraction --attributes user:string

sequelize db:migrate