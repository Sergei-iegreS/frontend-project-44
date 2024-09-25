install:		# Эта команда полезна при первом клонировании репозитория (или после удаления node_modules)
	npm ci

brain-games:      # Запуск игры
	node bin/brain-games.js

publish:
	npm publish --dry-run