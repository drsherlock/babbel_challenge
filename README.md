# Zain-Ul-Haq-Coding-Challenge

##### Note - requried node version >= 14.x 
### To run the project on localhost -

docker-compose build\
docker-compose up

### To run individual projects on localhost -

yarn install\
yarn run start(api has dependency on redis to run)

### To run tests for individual projects -

yarn install\
yarn test

### To deploy the project -

Different deployment strategies could be used depending on the maturity of the project. On approval of merge request to the main branch

- a PAAS service such as Heroku or Azure App Service could be triggered which can run tests, build and deploy the project.
- a hook on CI service such as Jenkins or CircleCI could be triggered. The CI service will run the tests, build the project, create the docker images and push them to a private docker repository. Cloud services like Azure Container Instances or Amazon ECS could pick up the latest image and run it.
- the docker image could be updated in helm templates stored in a git repository. Updates to a template could be picked up by a CD service like ArgoCD which could deploy the service to a K8 cluster.

### TODO(Improvements) -

- Update Dockerfiles to create optimized images suitable for production
- Use optimized configuration and TTL for redis cache
- Use tools like sentry for tracking errors and monitoring in UI
- Use ELK for APM and to store and analyze API logs
- Write more extensive tests including integration and e2e
- Use Typescript to increase scalability of the software
- Implement rate limiting to prevent DoS attacks
- Use styled components and a UI component library
- Use swagger to document the API
- Use linters and formatters
- Create a PWA
