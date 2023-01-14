# Docker build
```
docker build -t npmserver .
```

# Run web-server
```
docker run --name js-web-server -p 7777:7777 -d npmserver
```

# Open web browser
```
localhost:7777
```

