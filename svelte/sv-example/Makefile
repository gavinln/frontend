SCRIPT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

.PHONY: help
.DEFAULT_GOAL=help
help:  ## help for this Makefile
	@grep -E '^[a-zA-Z0-9_\-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: pcheck
pcheck:  ## prettier check
	npx prettier --cache --config prettier.config.js -c .

.PHONY: pwrite
pwrite:  ## prettier write
	npx prettier --cache --log-level=log --config prettier.config.js -w .
