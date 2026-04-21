let clients = JSON.parse(pm.collectionVariables.get("clients_config"));
let selected = pm.environment.get("selected_app");

let apps = Object.keys(clients).map(app => {
    return {
        name: app,
        selected: app === selected
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
            <button onclick="selectApp('{{name}}')">Select</button>
        </td>
    </tr>
    {{/each}}
</table>

<p><b>Current Selected App:</b> {{selected}}</p>

<script>
function selectApp(appName) {
    pm.environment.set("selected_app", appName);
    alert("Selected app updated to: " + appName);

    // Optional: auto re-run request (manual refresh needed otherwise)
}
</script>
`;

pm.visualizer.set(template, { apps, selected });
