FROM eclipse-temurin:17-jre

LABEL org.opencontainers.image.title="isa-category"
LABEL org.opencontainers.image.version="0.0.1-SNAPSHOT"


ENV VERSION="0.0.1-SNAPSHOT"

ENV SERVER_PORT=8080

ENV SPRING_DATASOURCE_URL=jdbc:h2:mem:lab-runner-base
ENV SPRING_DATASOURCE_DRIVERCLASSNAME=org.h2.Driver
ENV SPRING_DATASOURCE_USERNAME=admin
ENV SPRING_DATASOURCE_PASSWORD=admin

ENV SPRING_JPA_DATABASE_PLATFORM=org.hibernate.dialect.H2Dialect
ENV SPRING_JPA_GENERATE_DDL=true
ENV SPRING_JPA_HIBERNATE_DDL_AUTO=update

ENV SPRING_H2_CONSOLE_enabled=true

#ENV ISA_ELEMENT_URL=http://localhost:8081

EXPOSE 8080

COPY target/isa-category-${VERSION}.jar /opt/isa-category/isa-category.jar

CMD ["java", "-jar", "/opt/isa-category/isa-category.jar"]

