docker build -t ctso2/multi-client:latest -t ctso2/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t ctso2/multi-server:latest -t ctso2/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t ctso2/multi-worker:latest -t ctso2/multi-worker:$SHA -f ./worker/Dockerfile ./worker

#we have already logged in via travis.yml file

docker push ctso2/multi-client:latest
docker push ctso2/multi-server:latest
docker push ctso2/multi-worker:latest
docker push ctso2/multi-client:$SHA
docker push ctso2/multi-server:$SHA
docker push ctso2/multi-worker:$SHA
#apply all kubernetes configs
kubectl apply -f k8s

#set latest on each deployment Imperatively
kubectl set image deployments/server-deployment server=ctso2/multi-server:$SHA
kubectl set image deployments/client-deployment client=ctso2/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=ctso2/multi-worker:$SHA
