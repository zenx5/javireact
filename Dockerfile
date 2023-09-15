FROM node:16.16
WORKDIR /app
COPY . .
RUN npm install
ENV PORT 3000
EXPOSE $PORT
CMD ["npm","start"]
