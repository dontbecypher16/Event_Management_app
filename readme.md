#Event Management app

**FEATURES**
* Event promoter can:
     * Create new event
     * Fetch all events
     * Update event
     * Delete event
     * Search for events by category(req.query)


**TO DO**
* Set up mongoose 
* Create Schema
* Create routes 
* Update folder structure
* Install nodemon

* register route
   Create a new user 
   Hash user's password
   Create a token for user
   Send token back to the user

* login route
    Check if user exists
    Compare user's password with stored hash
    Create a token 
    Send token to user
* authenticate user routes
 * role-based authentication
   * Seeding 

**Schema**
   Validation
   // ex. required constraint, enum, default values
  
   Search feature
   // ex. '?' in url conditions everything after in url to be a query. 'req.query' would be used in code.

Event:
    title(String)
    cost(Number greater than 0)
    category(business, casual, party, general)
    


**src folder**
     controllers
     database
     models 
     routes
     index.js

