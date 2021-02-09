FROM postgres 
ENV POSTGRES_PASSWORD postgres 
ENV POSTGRES_DB testdb 
ADD ./sffinal.csv /data/
COPY init.sql /docker-entrypoint-initdb.d/