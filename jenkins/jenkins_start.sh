#!/bin/sh

#
# Launch docker-compose with the database initiated
#

cd $(dirname $0)

# Make sure we close out the previous containers
docker-compose -f docker-compose.jenkins.yml down

# This needs to be run twice some times. 
docker-compose -f docker-compose.jenkins.yml down

# Rebuild the image (required if dependencies change)
docker-compose -f docker-compose.jenkins.yml up --build -d