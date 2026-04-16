<?php
// File delete endpoint
$config = get_config();
$data = json_decode(file_get_contents('php://input'), true);
$path = $data['path'] ?? '';
if (!$path || strpos($path, "..") !== false) {
    send_json(['error' => 'Invalid path'], 400);
}
$full_path = $config['upload_root'] . str_replace('/uploads', '', $path);
if (!file_exists($full_path)) {
    send_json(['error' => 'File not found'], 404);
}
if (strpos($full_path, "/$client_id/") === false) {
    send_json(['error' => 'Forbidden'], 403);
}
if (!unlink($full_path)) {
    send_json(['error' => 'Delete failed'], 500);
}
log_event($client_id, 'delete', ['file' => $path]);
send_json(['success' => true]);
