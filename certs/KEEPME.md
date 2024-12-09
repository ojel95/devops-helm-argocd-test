# Certificates Directory

This directory is intended to store TLS/SSL certificates and private keys required for secure communication.

## Important Notes

- Do Not Commit Certificates
- The contents of this directory are sensitive and should never be committed to version control. Ensure that the .gitignore file excludes the certificates and keys.

## Purpose of This File

This KEEPME.md file exists to keep the directory in version control and provide context about its purpose.

## How to generate TLS certificates

1. First you need to have or generate the DNS that is going to be used.
2. Step into certificates directory:

```bash
cd ./certs/
```

2. Having the DNS execute the following commands:

```bash
certbot certonly --manual --preferred-challenges=dns -d '*.example-domain.duckdns.org'

# The &token= is the token gave by DuckDns (its shown in the website).
# The &txt= is the value gave by certbot after running the previous command.
curl -s "https://www.duckdns.org/update?domains=example-domain&token="de6ac5b8-91fd-4199-8ec5-e8d0a1feaac0"&txt=2VL-Gjw4QfJWr9vGt8KdSq6vv3TNV2wtpEPp_HfFmpc"
```
