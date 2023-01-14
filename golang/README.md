# Docker build
```
docker build -t golangserver:1.0 .
```
## TroubleShooting
**Check vars**
```
go env
```
Find GOPATH variable. If not present you must defined them.

**Create go.mod. Can be any =)**
```
go mod init pwd      
```

# Run web-server
```
docker run --name golang-web-server -p 8888:8888 -d golangserver:1.0
```

# Open web browser
```
localhost:8888
```

