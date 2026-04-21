let clients = JSON.parse(pm.collectionVariables.get("clients_config"));
let selected = pm.environment.get("selected_app");

let apps = Object.keys(clients).map(app => {
    return {
        name: app,
        selected: app === selected ? "✅ Selected" : ""
    };
});

let template = `
    <h2>Available Developer Apps</h2>
    <table border="1" cellpadding="8" cellspacing="0">
        <tr>
            <th>App Name</th>
            <th>Status</th>
        </tr>
        {{#each apps}}
        <tr>
            <td>{{name}}</td>
            <td>{{selected}}</td>
        </tr>
        {{/each}}
    </table>
`;

pm.visualizer.set(template, { apps });
