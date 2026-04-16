<?php
// File upload endpoint
$config = get_config();

if (!isset($_FILES['file'])) {
    send_json(['error' => 'No file uploaded'], 400);
}
$file = $_FILES['file'];
if ($file['error'] !== UPLOAD_ERR_OK) {
    send_json(['error' => 'Upload error'], 400);
}
if ($file['size'] > $config['max_size']) {
    send_json(['error' => 'File too large'], 400);
}
$type = mime_content_type($file['tmp_name']);
if (!isset($config['allowed_types'][$type])) {
    send_json(['error' => 'Invalid file type'], 400);
}
$ext = $config['allowed_types'][$type];
$client_id = $client_id ?? 'unknown';
$today = date('Y-m-d');
$upload_dir = $config['upload_root'] . "/$client_id/$today";
if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0775, true);
}
$filename = sanitize_filename(pathinfo($file['name'], PATHINFO_FILENAME)) . "_" . uniqid() . ".$ext";
$target = "$upload_dir/$filename";
if (!move_uploaded_file($file['tmp_name'], $target)) {
    send_json(['error' => 'Failed to save file'], 500);
}
// Public URL (adjust if using a subfolder or domain)
$public_url = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['SCRIPT_NAME']) . "/uploads/$client_id/$today/$filename";
log_event($client_id, 'upload', ['file' => $filename, 'size' => $file['size'], 'type' => $type]);
send_json(['url' => $public_url, 'path' => "/uploads/$client_id/$today/$filename"]);
