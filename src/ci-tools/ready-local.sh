#!/usr/bin/env sh
stepCnt=0
stepTotal=4

function runCommand() {
    ((stepCnt++))
    echo '\033[32m'
    echo "[Шаг $stepCnt из $stepTotal] $2"
    echo '\033[0m'
    $1
    echo ''
}

runCommand "yarn lint:fix" 'Форматирование измененного кода. eslint'

runCommand "yarn styles" 'Проверка стилей. stylelint'

runCommand "yarn styles:fix" 'Форматирование измененого кода. stylelint'

runCommand 'yarn check:ts' 'Проверка typescript'

echo '\033[32m'
echo 'Скрипт успешно завершен'
echo '\033[0m'
