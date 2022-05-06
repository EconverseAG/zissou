FROM node:16.5 AS build-env

WORKDIR /app
RUN yarn
RUN yarn build

FROM gcr.io/distroless/nodejs:16.5 AS run-env
ENV NODE_ENV production
COPY --from=build-env /app /app

EXPOSE 8080

WORKDIR /app
CMD ["server.js"]