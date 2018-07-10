import dpd_components
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([
    dpd_components.Pipe(
        id='input',
        value='my-value-fredd',
        source='my-lvvvvvvvvabel'
    ),
    html.Div(id='output')
])

@app.callback(
    dash.dependencies.Output('output', 'children'),
    [dash.dependencies.Input('input', 'value'),
     dash.dependencies.Input('input', 'source')
     ])
def display_output(value, source):
    return 'Value is %s and Source is %s'%(value, source)

if __name__ == '__main__':
    app.run_server(debug=True)
