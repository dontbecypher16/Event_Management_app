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
