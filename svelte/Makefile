SCRIPT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

.PHONY: help
.DEFAULT_GOAL=help
help:  ## help for this Makefile
	@grep -E '^[a-zA-Z0-9_\-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: shell
shell:  ## start devenv shell
	devenv shell

.PHONY: oxlint
oxlint:  ## lint javascript files
	oxlint javascript-fundamentals/*.js

.PHONY: oxfmt
oxfmt:  ## format javascript files
	oxfmt javascript-fundamentals/*.js

.PHONY: svfmt
svfmt:  ## format svelte files
	npx prettier --use-tabs false
