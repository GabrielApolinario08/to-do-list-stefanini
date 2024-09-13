FROM maven:3.8.4-openjdk-17 AS build

COPY src /app/src
COPY pom.xml /app

WORKDIR /app
RUN mvn clean install -DskipTests


FROM openjdk:17-jdk-slim

# Copie o arquivo JAR da aplicação para o contêiner
COPY --from=build /app/target/to-do-list-backend-0.0.1-SNAPSHOT.jar /app/app.jar

WORKDIR /app

# Exponha a porta que a aplicação usa
EXPOSE 8080

# Defina o comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
