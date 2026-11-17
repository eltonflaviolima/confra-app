FROM python:3.12-alpine

WORKDIR /app

# Dependências mínimas de sistema e healthcheck
RUN apk add --no-cache curl

# Copia arquivos da aplicação
COPY . /app

# Garante o link simbólico para instants -> sounds/instants
RUN rm -rf /app/instants && ln -s /app/sounds/instants /app/instants

# Garante permissões de execução
RUN chmod +x /app/server.py

EXPOSE 3000

ENV PORT=3000
ENV PYTHONUNBUFFERED=1

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/state || exit 1

CMD ["python3", "server.py"]
