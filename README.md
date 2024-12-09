# Devops test cluster

This is a test located in a AWS EC2 instance for testing.

## Commands

- Setup kubeconfig file

```bash
export KUBECONFIG=~/TII/kubeconfig-files/devops-test.yaml

or

use-devops-test
```

- Change cluster namespace

```bash
kubectl config set-context --current --namespace=test-helm-orlando
```

- Create TLS certificates secret in cluster

```bash
kubectl create secret tls test-app-secret --cert ./certs/DOMAIN_DIRECTORY/fullchain.pem --key ./certs/DOMAIN_DIRECTORYprivkey.pem -n test-orlando
```

- Install helm charts

```bash
helm install test-app ./charts/test-app -n test-helm-orlando
```

## Test application locally

1. `export POD_NAME=$(kubectl get pods --namespace test-helm-orlando -o jsonpath="{.items[0].metadata.name}")`
2. `export CONTAINER_PORT=$(kubectl get pod --namespace test-helm-orlando $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")`
3. `echo "Visit http://127.0.0.1:8080 to use your application"`
4. `kubectl --namespace test-helm-orlando port-forward $POD_NAME 8080:$CONTAINER_PORT`