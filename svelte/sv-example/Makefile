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

.PHONY: run
run:  ## run the dev server on http://127.0.0.1:5173/
	@echo http://127.0.0.1:5173/
	npm run dev

.PHONY: ctags
ctags:  ## run ctags on files recursively
	# ctags --langmap=XML:+.svelte --exclude=node_modules --list-excludes -V -R .
	ctags --langmap=XML:+.svelte --exclude=node_modules -V -R .
