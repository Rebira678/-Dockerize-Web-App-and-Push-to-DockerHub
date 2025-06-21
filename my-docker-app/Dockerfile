#use official node.js base image
FROM node:18

#create app directory inside container
WORKDIR /app

#copy dependence files first(best practice for catching)
COPY package*.json ./

#install dependenceis inside container
RUN npm install

#copy the remaining source code
COPY . .

#App will run on port 3000
EXPOSE 3000

#start app when container runs
CMD ["npm","start"]
