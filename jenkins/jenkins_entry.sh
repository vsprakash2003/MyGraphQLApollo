DOCKER_SOCKET=/var/run/docker.sock
DOCKER_GROUP=docker
BUILD_USER=jenkins

if [ -S ${DOCKER_SOCKET} ]; then
    DOCKER_GID=$(stat -c '%g' ${DOCKER_SOCKET})

    #addgroup is distribution specific

    addgroup -S -g ${DOCKER_GID} ${DOCKER_GROUP}
    addgroup  ${BUILD_USER} ${DOCKER_GROUP}
fi