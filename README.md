# dpd-components

This repository contains components for [Django Plotly Dash](https://pypi.org/project/django-plotly-dash/). This
is a [Plotly Dash plugin](https://dash.plot.ly/plugins).

The source for this project can be seen here:
<https://github.com/GibbsConsulting/dpd-components>

To install the package

    pip install dpd-components

## Development environment setup

Development requires python 3 and node.js to build the python and javascript parts.

To set up a development environment:

```bash
virtualenv env -p python3.6
source env/bin/activate
pip install dev_requirements.txt
npm install builder-init
export PATH=$PATH:$PWD/node_modules/.bin
builder-init dash-components-archetype
```
If needed, relocate the component into root directory.

## Development

Once the environment has been prepared, the following two commands are needed to initialise a terminal or other session:

```bash
source env/bin/activate
export PATH=$PATH:$PWD/node_modules/.bin
```

Also, in the virtualenv of the python project using ``DjangoDash`` (or similar), this project can be added in development form

```bash
cd ... this repo root directory ...
python setyp.py develop
```

## Build commands

To test the component:

```bash
python usage.py
```

To run the README compiler:

```bash
grip
```

To perform a local rebuild:

```bash
npm prepublish
python setup.py install
```

To run just the javascript for debugging:

```bash
builder run demo
```
## Release

To prepare a release, the version number in both ``dpd_components/version.py`` and ``package.json`` has to be updated.

Releases require both javascript and python components to be generated and uploaded, as described
in the plotly [online documentation](https://dash.plot.ly/plugins).

```bash
npm login
npm run publish-all
# If the python upload part fails
twine dist/*
```
