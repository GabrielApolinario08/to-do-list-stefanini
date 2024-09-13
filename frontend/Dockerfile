# Etapa de construção
FROM node:18 AS build

WORKDIR /app

# Copie os arquivos de configuração do npm
COPY package*.json ./
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Execute a build da aplicação
RUN npm run build

# Etapa de produção
FROM nginx:alpine

# Copie os arquivos da build para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta que o Nginx usa
EXPOSE 80

# Inicie o Nginx
CMD ["nginx", "-g", "daemon off;"]
