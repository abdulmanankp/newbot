<?php
function get_config() {
    static $config = null;
    if ($config === null) {
        $config = require __DIR__ . '/config.php';
    }
    return $config;
}

function log_event($client_id, $action, $details = []) {
    $config = get_config();
    $entry = [
        'time' => date('c'),
        'client_id' => $client_id,
        'action' => $action,
        'details' => $details,
        'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
        'ua' => $_SERVER['HTTP_USER_AGENT'] ?? '',
    ];
    file_put_contents($config['log_file'], json_encode($entry) . "\n", FILE_APPEND);
}

function send_json($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

function sanitize_filename($name) {
    return preg_replace('/[^a-zA-Z0-9._-]/', '_', $name);
}

function check_rate_limit($client_id) {
    $config = get_config();
    $limit = $config['rate_limit'];
    $file = sys_get_temp_dir() . "/storageapi_{$client_id}_ratelimit";
    $now = time();
    $window = 60;
    $data = @json_decode(@file_get_contents($file), true) ?: ['start' => $now, 'count' => 0];
    if ($now - $data['start'] > $window) {
        $data = ['start' => $now, 'count' => 1];
    } else {
        $data['count']++;
    }
    file_put_contents($file, json_encode($data));
    if ($data['count'] > $limit) {
        send_json(['error' => 'Rate limit exceeded'], 429);
    }
}
