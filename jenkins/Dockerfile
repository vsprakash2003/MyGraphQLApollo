FROM jenkins/jenkins:lts

RUN mkdir -p /tmp/Myapps/Jenkins
WORKDIR /tmp/Myapps/Jenkins
COPY ./jenkins_entry.sh .

ADD . /tmp/Myapps/Jenkins
EXPOSE 8080
