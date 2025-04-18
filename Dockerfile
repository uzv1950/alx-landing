# base image
FROM node:14-bullseye
#Environment argument
ARG ENV
# Setup ENV
ENV ENV ${ENV}
#Create working directory and assign them to node user and group
RUN mkdir -p /app && chown -R node:node /app
#Setup working directory
WORKDIR /app
# Copy new files or directories into the filesystem of the container
COPY . /app
# Assign user node as the container user
USER node
# install dependencies
RUN npm install
# build app depending to environment argument and setup run.sh script
RUN if [ "$ENV" = "production" ]; then npm run build && echo npm run start > run.sh ; else npm run build:staging && echo npm run start:staging > run.sh ; fi; chmod +x run.sh;
# Expose internal system to port
EXPOSE 3000
#Run the run.sh script at startup
CMD ./run.sh