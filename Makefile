
# HELP target to show described commands within the CLI
# Anything prepended with a double hash (##) will be displayed to the CLI user
# -----------------------
.DEFAULT_GOAL := help

# TODO: Add caching and update image only if code has changed: https://www.cypress.io/blog/2018/08/08/fast-tests-tiny-docker-image/
.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: install
install: ## build the docker network
	@docker-compose build

.PHONY: webserver
webserver: ## serve the public folder
	@docker-compose up --build web

PHONY: integration-test
integration-test: ## run cypress integration testing
	@docker-compose up

PHONY: format
format: ## autoformat js, jsx, and json files
	@docker-compose run --rm web   			yarn format

