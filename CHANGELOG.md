### v0.1.7 - Fri 11th Jan '18
* Refactored omitOwnProps to remove lodash dependency
    * Was preventing webpack from importing components
    
### v0.1.6 - Thu 10th Jan '18
* Updated package.json with correct main path

### v0.1.5 - Wed 9th Jan '18
* Removed yarn.lock
* Added new Timeline component
* Abbr component spreads props

### v0.1.4 - Mon 7th Jan '18
* Added u-text class to Container and Grid components
* Added Routing to demo app
* Added function omitOwnProps to remove component props before spreading
* Updated README

* **Bug:**
Fixed demo app

### v0.1.3 - Sun 6th Jan '18
* Updated failing tests

### v0.1.2 - Sun 6th Jan '18
* Props and classes spread to Address
* Added eslint 
  * Configured for airbnb
* Updated .gitignore to ignore docz cache