# Scripts

---

В `package.json` присутствуют скрипты, которыми следует активно пользоваться в процессе подготовки изменений к фиксации:

- `yarn ready-local` следует прогонять всегда перед созданием ПРа для успешного прохождения ci в GitHub Actions
- `yarn lint` - скрипт для прогона eslint
- `yarn lint:fix` - пофиксит большинство ошибок от eslint
- `yarn styles` - скрипт для прогона stylelint
- `yarn styles:fix` - пофиксит большинство ошибок от stylelint
