let clients = JSON.parse(pm.collectionVariables.get("clients_config"));
let selected = pm.environment.get("selected_app");

let apps = Object.keys(clients).map(app => ({
    name: app,
    selected: app === selected,
    link: `?selected_app=${app}`
}));

let template = `
<h2>Developer Apps</h2>

<table border="1" cellpadding="8">
<tr>
<th>App</th>
<th>Status</th>
<th>Select</th>
</tr>

{{#each apps}}
<tr>
<td>{{name}}</td>
<td>{{#if selected}}✅ Selected{{/if}}</td>
<td>
    <a href="{{link}}">Select</a>
</td>
</tr>
{{/each}}

</table>

<p><b>Current Selected App:</b> {{selected}}</p>
`;

pm.visualizer.set(template, { apps, selected });
