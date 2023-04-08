FROM node:16.15.1
  
WORKDIR /app
  
COPY package*.json ./
RUN npm install
COPY . .
  
RUN npm run build
EXPOSE 5500
  
CMD ["npm", "start"]
