install:		# Эта команда полезна при первом клонировании репозитория (или после удаления node_modules)
	npm ci

brain-games:      # Запуск игры
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc: 
	node bin/brain-calc.js

brain-gcd: 
	node bin/brain-gcd.js

brain-progression: 
	node bin/brain-progression.js	

brain-prime: 
	node bin/brain-prime.js

publish:
	npm publish --dry-run