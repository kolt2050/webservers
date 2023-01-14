# Docker build
```
docker build -t npmserver:1.0 .
```

# Run web-server
```
docker run --name js-web-server -p 7777:7777 -d npmserver:1.0
```

# Open web browser
```
localhost:7777
```

