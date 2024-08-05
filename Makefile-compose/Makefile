### DOCKER COMPOSE COMMANDS

DEV_COMPOSE_FILE=../docker-compose-dev.yml
DEBUG_COMPOSE_FILE=../docker-compose-debug.yml
TEST_COMPOSE_FILE=../docker-compose-test.yml

.PHONY: compose-build
compose-build:
	docker compose build


.PHONY: compose-up
compose-up:
	docker compose up

.PHONY: compose-up-build
compose-up-build:
	docker compose up --build

.PHONY: compose-down
compose-down:
	docker compose down


# DOCKER COMPOSE DEV FILE COMMANDS
.PHONY: dev-compose-build
dev-compose-build:
	docker compose -f ${DEV_COMPOSE_FILE} build

.PHONY: dev-compose-up
dev-compose-up:	
	docker compose -f ${DEV_COMPOSE_FILE} up

.PHONY: dev-compose-up-build
dev-compose-up-build:
	docker compose -f ${DEV_COMPOSE_FILE} up --build

.PHONY: dev-compose-down	
dev-compose-down:
	docker compose -f ${DEV_COMPOSE_FILE} down 

# DOCKER COMPOSE DEBUG FILE COMMANDS
# this builds on the compoe dev file
.PHONY: debug-compose-up-build
debug-compose-up-build:
	docker compose -f ${DEV_COMPOSE_FILE} -f ${DEBUG_COMPOSE_FILE} up --build

# DOCKET COMPOSE TEST FILE COMMANDS
.PHONY: run-tests
run-tests:
	docker compose -f ${DEV_COMPOSE_FILE} -f ${TEST_COMPOSE_FILE} run --build api-golang
	docker compose -f ${DEV_COMPOSE_FILE} -f ${TEST_COMPOSE_FILE} run --build api-node