SCRIPT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

.PHONY: help
.DEFAULT_GOAL=help
help:  ## help for this Makefile
	@grep -E '^[a-zA-Z0-9_\-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: tmux
tmux:  ## start tmux
	tmuxp load .tmux.yaml

.PHONY: pre-commit-file
pre-commit-file:  ## pre-commit for a single file: pre-commit-file fl=<file>
	@test -n "$(fl)" || { echo "fl= not specified"; exit 1; }
	@test -f "$(fl)" || { echo "$(fl) does not exist"; exit 1; }
	pre-commit run --files $(fl)

.PHONY: javascript-variables
javascript-variables:  ## example of javascript variables
	node ./javascript-fundamentals/variables.js

.PHONY: markdownlint
markdownlint:  ## run markdown file lint
	markdownlint --disable MD029 MD040 -- '**/*.md'

.PHONY: oxlint
oxlint:  ## lint javascript files
	oxlint javascript-fundamentals/*.js

.PHONY: oxfmt
oxfmt:  ## format javascript files
	oxfmt javascript-fundamentals/*.js
