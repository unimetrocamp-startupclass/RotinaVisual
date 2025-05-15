# Estágio 1: Dependências e Build
FROM node:18-alpine AS deps
WORKDIR /usr/src/app
COPY package*.json ./
# Instala TODAS as dependências, incluindo devDependencies, necessárias para 'nest start --watch'
RUN npm install

# Estágio 2: Aplicação (para desenvolvimento com hot-reload)
FROM node:18-alpine
WORKDIR /usr/src/app
# Copia as dependências instaladas do estágio anterior
COPY --from=deps /usr/src/app/node_modules ./node_modules
# Copia os arquivos de configuração e o código fonte
COPY . .
# Não precisamos de `RUN npm run build` aqui para `start:dev` se
# `nest start --watch` cuida da compilação e do watch.
# Se você preferir ter um build inicial, pode descomentar, mas garanta que `dist`
# não seja sobrescrito por um volume se você montá-lo.

EXPOSE 3000
# O comando para iniciar a aplicação é fornecido pelo docker-compose.yml
# Este CMD é um fallback.
CMD ["npm", "run", "start:dev"]