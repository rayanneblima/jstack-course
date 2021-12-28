# NodeJS + Express - Part 2 (Docker + Postgres)

1. docker pull postgres
2. docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
3. docker start pg
---
1. docker exec -it pg bash (open terminal)
2. psql -U root (login)
3. \l (list databases)
4. \c mycontacts (conect to a database)
5. \dt (list tables)
