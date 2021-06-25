module.exports =  {
	"type": "mysql",
	"host": "localhost",
	"port": 3306,
	"username": "root",
	"database": "ApartmentWebsite",
	"password": "",
	"synchronize": true,
	"cache": true,
	"logging": false,
	"entities": [
		__dirname + "/dist/db/models/*.js"
	],
	"migrations": [
	   "src/server/db/migrations/*.ts"
	],
	"cli": {
        "migrationsDir": "src/server/db/migrations/"
    }
 }