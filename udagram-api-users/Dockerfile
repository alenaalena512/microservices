# Use NodeJS base image
FROM node:12

# Create app directory
WORKDIR /app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy app source
COPY ./ ./

# Compiles the app
RUN npm run build 

# Bind the port that the image will run on
EXPOSE 8100

WORKDIR /app/www

ENV POSTGRES_USERNAME=$POSTGRES_USERNAME
ENV POSTGRES_PASSWORD=$POSTGRES_PASSWORD
ENV POSTGRES_HOST=$POSTGRES_HOST
ENV POSTGRES_DB=$POSTGRES_DB
ENV AWS_BUCKET=$AWS_BUCKET
ENV AWS_REGION=$AWS_REGION
ENV AWS_PROFILE=default
ENV JWT_SECRET=$JWT_SECRET
ENV URL=$URL


# Define the Docker image's behavior at runtime
CMD ["node", "run", "dev"]