### Hexlet tests and linter status:

[![Actions Status](https://github.com/NatalyKT/backend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/NatalyKT/backend-project-lvl2/actions)
[![Node CI](https://github.com/NatalyKT/backend-project-lvl2/actions/workflows/gendiff-check.yml/badge.svg)](https://github.com/NatalyKT/backend-project-lvl2/actions/workflows/gendiff-check.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/NatalyKT/backend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/NatalyKT/backend-project-lvl2/test_coverage)

**Difference calculator** is a program that determines the difference between two data structures. This is a popular task and there are many online services for solving it, for example: http://www.jsondiff.com/. A similar mechanism is used when outputting tests or when automatically tracking changes in configuration files.

Utility features:

    -Support for different input formats: yaml, json
    -Generating a report in plain text, stylish and json format

Run program:

`gendiff <filename 1>.json <filename 2>.json`

An example of comparing json-files:

[![asciicast](https://asciinema.org/a/Hqd3lvCK4vtA3u2SuSkHGHkRs.svg)](https://asciinema.org/a/Hqd3lvCK4vtA3u2SuSkHGHkRs)

An example of comparing yml-files:

[![asciicast](https://asciinema.org/a/X6xMTSOTEWCeyAUTGcg0cCZBa.svg)](https://asciinema.org/a/X6xMTSOTEWCeyAUTGcg0cCZBa)

An example of comparing two files in different formats:
#### Stylish Format

```sh
$ gendiff -f stylish filePath1.json filePath2.json
```

[![asciicast](https://asciinema.org/a/kFEMTVqKORwT23Fv1Xzapth3g.svg)](https://asciinema.org/a/kFEMTVqKORwT23Fv1Xzapth3g)

#### Plain Format
```sh
$ gendiff -f plain filePath1.json filePath2.json
```
[![asciicast](https://asciinema.org/a/ujEH7qHrhQvtCjngFnlDCb5Mz.svg)](https://asciinema.org/a/ujEH7qHrhQvtCjngFnlDCb5Mz)

#### JSON Format
```sh
$ gendiff -f json filePath1.json filePath2.json
```
[![asciicast](https://asciinema.org/a/7rHiej9nlsnesskAN5mwzMLCK.svg)](https://asciinema.org/a/7rHiej9nlsnesskAN5mwzMLCK)

### Run tests

```sh
$ make test
```
[![asciicast](https://asciinema.org/a/ZJImU7ndq34Y3JL5dJYAGruUT.svg)](https://asciinema.org/a/ZJImU7ndq34Y3JL5dJYAGruUT)