install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint . --fix

test:
	npx -n --experimental-vm-modules jest --watch
	
test-coverage:
	npm test -- --coverage --coverageProvider=v8
