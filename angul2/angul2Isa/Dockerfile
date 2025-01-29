FROM nginx:1.23.3

LABEL org.opencontainers.image.title="isa-ng"

LABEL org.opencontainers.image.version="0.0.1-SNAPSHOT"

ENV VERSION="0.0.1-SNAPSHOT"
ENV API_URL=http://isa-gateway:8080/api
EXPOSE 80

ADD dist/angul2-isa /usr/share/nginx/html/
ADD docker/etc/nginx/templates/ /etc/nginx/templates/
