from setuptools import setup

exec (open('dpd_components/version.py').read())

setup(
    name='dpd_components',
    version=__version__,
    author='GibbsConsulting',
    packages=['dpd_components'],
    include_package_data=True,
    license='MIT',
    description='Django Plotly Dash component suite',
    install_requires=[]
)
