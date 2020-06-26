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
WORKDIR /app/www

ENV POSTGRES_USERNAME=pumpkinkova
ENV POSTGRES_PASSWORD=pumpkinkova
ENV POSTGRES_HOST=pumpkinkova.cojgcknv29kr.eu-west-2.rds.amazonaws.com
ENV POSTGRES_DB=pumpkinkova
ENV AWS_BUCKET=udagram-example-dev
ENV AWS_REGION=eu-west-2
ENV AWS_PROFILE=default
ENV JWT_SECRET=heheheheheheeh
ENV URL=http://0.0.0.0:80
ENV PORT=80
EXPOSE 80

# Define the Docker image's behavior at runtime
CMD ["node", "server.js"]