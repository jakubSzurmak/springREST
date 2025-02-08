FROM eclipse-temurin:17-jre

LABEL org.opencontainers.image.title="isa-gateway"
LABEL org.opencontainers.image.version="0.0.1-SNAPSHOT"

ENV VERSION="0.0.1-SNAPSHOT"

ENV SERVER_PORT=8080

EXPOSE 8080

COPY target/isa-gateway-${VERSION}.jar /opt/isa-gateway/isa-gateway.jar

CMD ["java", "-jar", "/opt/isa-gateway/isa-gateway.jar"]