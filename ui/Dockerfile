# Name the node stage "builder"
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy our node module specification
COPY package.json package.json
COPY yarn.lock yarn.lock

# install node modules and build assets
RUN yarn install

# Copy all files from current directory to working dir in image
# Except the one defined in '.dockerignore'
COPY . .

# Entry point when Docker container has started
CMD ["yarn", "start"]