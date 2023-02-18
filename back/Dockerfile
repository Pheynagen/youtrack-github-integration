FROM maven:3.6.3-jdk-11 AS builder
COPY ./ ./
RUN mvn clean package -DskipTests
FROM openjdk:11.0.7-jdk-slim
COPY --from=builder /target/back.jar /back.jar
EXPOSE 8085

ENTRYPOINT ["java","-jar","/back.jar"]
