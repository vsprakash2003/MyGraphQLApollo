FROM jenkins/jenkins:lts

RUN mkdir -p /tmp/Myapps/Jenkins
WORKDIR /tmp/Myapps/Jenkins
COPY ./jenkins_entry.sh .

ADD . /tmp/Myapps/Jenkins
ENV PATH="/usr/local/bin:${PATH}"

EXPOSE 8080
