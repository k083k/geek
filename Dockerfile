# Use official node image as the base image
FROM node:18.16.1-alpine

# set working directory
WORKDIR /app

# copy dependacies only
COPY package*.json /app/

# Install all the dependencies
RUN npm ci && npm cache clean --force

# add app
COPY ./ /app/

# build app
RUN npm run build

# start app
CMD ["npm", "start"]