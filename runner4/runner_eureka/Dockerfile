FROM eclipse-temurin:17-jre

LABEL org.opencontainers.image.title="isa-eureka"
LABEL org.opencontainers.image.version="0.0.1-SNAPSHOT"

ENV VERSION="0.0.1-SNAPSHOT"

ENV SERVER_PORT=8761

EXPOSE 8761

COPY target/isa-eureka-${VERSION}.jar /opt/isa-eureka/isa-eureka.jar

CMD ["java", "-jar", "/opt/isa-eureka/isa-eureka.jar"]