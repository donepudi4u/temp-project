let clients = JSON.parse(pm.collectionVariables.get("clients_config"));

// If user clicked from UI or manually passed value
let selectedFromRequest = pm.request.url.query.get("selected_app");

if (selectedFromRequest) {
    pm.environment.set("selected_app", selectedFromRequest);
}

let selected = pm.environment.get("selected_app");

if (!clients[selected]) {
    console.log("Available apps:", Object.keys(clients));
    throw new Error("Invalid selected_app: " + selected);
}

pm.environment.set("client_id", clients[selected].client_id);
pm.environment.set("client_secret", clients[selected].client_secret);

console.log("Using app:", selected);
