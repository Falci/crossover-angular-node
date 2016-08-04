
## Check lists

### Mandatory
* [x] Three-way binding (View > Model > Database).
* [x] Each one of the three mentioned widgets must be implemented as an AngularJS directive.
* [x] Use NodeJS + Express for the back-end.
* [x] Apply input validations and constraints wherever necessary to create a stable application.
* [x] All users data should persist when the application is shut down and available when restarted.
* [x] Your datastores should be any SQL based variation RDS (MySQL, SQL Server, Sqlite, Postgres).
* [x] Even if you are not able to complete all the tasks, try to achieve a working application.

### Bonus Points:
* [ ] All code should be commented using JSDoc format.
* [x] All code should adhere to appropriate JSHint standards.
  * Note: I'm usign ESLint instead of.
* [ ] Business logic should be unit tested under the Mocha framework.
* [ ] Non-UI routes should be end-to-end tested under the Mocha framework.
* [x] Use Material Design style for the UI.
* [ ] Create a Docker container for the application (include a Dockerfile).
* [x] Add missing requirements to the implementation, according to your experience.

## Missing requirements:
For this particular problem, a NoSQL database seems to fit better;

## Known Issues
* In the 'Start Auction' dialog, using the correct inject (browser inspector) is possible to create auction for others uses. It should be solve using server side session. We can't trust in all users' data.


## License
It uses:
  * Icons from:
    * [Baianat](http://www.flaticon.com/authors/baianat) - [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)
    * [Flaticon](http://www.flaticon.com/) - [Flaticon Basic License ](http://file000.flaticon.com/downloads/license/license.pdf)
    * [Vectors Market](http://www.flaticon.com/authors/vectors-market) - [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)
  * [Google Material](https://material.angularjs.org) - [MIT License](https://raw.githubusercontent.com/angular/material/v1.1.0-rc.5/LICENSE)

Check [bower.json](angular/bower.json) and [package.json](node/package.json) for more details.
