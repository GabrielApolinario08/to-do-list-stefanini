# Use uma imagem base do Java
FROM openjdk:17-jdk-slim

# Defina o diretório de trabalho
WORKDIR /app

# Copie o arquivo JAR da aplicação para o contêiner
COPY target/to-do-list-backend-0.0.1-SNAPSHOT.jar app.jar

# Exponha a porta que a aplicação usa
EXPOSE 8080

# Defina o comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
