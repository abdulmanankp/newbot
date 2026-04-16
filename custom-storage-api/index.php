<?php
// Main entry point for the storage API
require_once __DIR__ . '/utils.php';

$config = get_config();

// --- Basic router ---
$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = trim(str_replace(dirname($_SERVER['SCRIPT_NAME']), '', $path), '/');

// --- API Key Auth ---
$auth = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
if (strpos($auth, 'Bearer ') === 0) {
    $auth = substr($auth, 7);
}
$client_id = null;
foreach ($config['api_keys'] as $cid => $key) {
    if (hash_equals($key, $auth)) {
        $client_id = $cid;
        break;
    }
}
if (!$client_id) {
    send_json(['error' => 'Unauthorized'], 401);
}
check_rate_limit($client_id);

// --- Routing ---
if ($method === 'POST' && $path === 'upload') {
    require __DIR__ . '/routes/upload.php';
    exit;
}
if ($method === 'DELETE' && $path === 'delete') {
    require __DIR__ . '/routes/delete.php';
    exit;
}
if ($method === 'GET' && $path === 'list') {
    require __DIR__ . '/routes/list.php';
    exit;
}

send_json(['error' => 'Not found'], 404);
