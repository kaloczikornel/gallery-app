#!/bin/bash

mkdir local_psql_data
CURRENT_DIR=$(pwd)

docker run --name local-psql --rm -v $CURRENT_DIR/local_psql_data:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_PASSWORD=root -e POSTGRES_USER=root -d postgres