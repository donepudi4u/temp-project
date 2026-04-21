let clients = JSON.parse(pm.collectionVariables.get("clients_config"));
let selected = pm.environment.get("selected_app");

let apps = Object.keys(clients).map(app => {
    return {
        name: app,
        selected: app === selected,
        link: `?app=${app}`
    };
});

let template = `
<h2>Developer Apps</h2>
<table border="1" cellpadding="8" cellspacing="0">
    <tr>
        <th>App Name</th>
        <th>Status</th>
        <th>Action</th>
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
