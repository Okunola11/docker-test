# Pin specific version for stability
# Use separate stage for building image
# Use debian for easier build utilities
FROM golang:1.19-bullseye AS build-base

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o api-golang

CMD [ "./api-golang" ]