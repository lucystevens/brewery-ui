#!/bin/bash
# deploy a service using docker

# If no args exit
if [ $# -eq 0 ]; then
	echo "No image provided. Usage docker-deploy.sh <image> [options]"
    exit 1
fi

service_image=$1
tmp=${service_image##*/}
service_name=${tmp%%:*}
service_version=${tmp##*:}

echo "Deploying $service_name v$service_version"

# Pull version
docker pull $service_image

# Stop service if running
docker container stop $service_name
docker container rm $service_name

# Start new service
docker run -d --name $service_name "${@:2}" $service_image
#echo "docker run -d --name $service_name "${@:2}" $service_image"