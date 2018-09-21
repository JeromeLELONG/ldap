start: ## Start the client and server in docker for local development
	docker-compose up --build
stop: ## Start the client and server in docker for local development
	docker-compose down

install-node:
	docker-compose run --rm --no-deps node bash -ci 'npm cache clean -f && npm install --force'
install: install-node

reload-apache: 
	docker-compose run --rm --no-deps apache bash -ci 'apache2ctl  graceful'

install-node:
	docker-compose run --rm --no-deps node bash -ci 'npm cache clean -f && npm install --force'
	
install: install-node
