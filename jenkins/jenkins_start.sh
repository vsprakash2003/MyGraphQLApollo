#!/bin/sh

#
# Launch docker-compose with the database initiated
#

echo "hi"
cd $(dirname $0)

# Make sure we close out the previous containers
docker-compose -f docker-compose.jenkins.yml down

# This needs to be run twice some times. 
docker-compose -f docker-compose.jenkins.yml down

echo "hiya"
# Rebuild the image (required if dependencies change)
docker-compose -f docker-compose.jenkins.yml up --build -d