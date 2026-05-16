# This script creates a unique index on the email field for the users collection in MongoDB.
# Run this in mongosh after Django migrations and population.

use octofit_db
db.users.createIndex({ "email": 1 }, { unique: true })
