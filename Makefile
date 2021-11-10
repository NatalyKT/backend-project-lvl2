install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint . --fix

test:
	npx --experimental-vm-modules jest --watch

test-coverage:
	npm test -- --coverage --coverageProvider=v8

stylish:
	gendiff -f stylish __fixtures__/file1.json __fixtures__/file2.json

plain:
	gendiff -f plain __fixtures__/file1.json __fixtures__/file2.json

json:
	gendiff -f json __fixtures__/file1.json __fixtures__/file2.json
	
.PHONY: test
