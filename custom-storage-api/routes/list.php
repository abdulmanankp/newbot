<?php
// File listing endpoint
$config = get_config();
$dir = $config['upload_root'] . "/$client_id";
$results = [];
if (is_dir($dir)) {
    $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir));
    foreach ($rii as $file) {
        if ($file->isDir()) continue;
        $rel = str_replace($config['upload_root'], '/uploads', $file->getPathname());
        $results[] = [
            'path' => $rel,
            'size' => $file->getSize(),
            'modified' => date('c', $file->getMTime()),
        ];
    }
}
log_event($client_id, 'list', ['count' => count($results)]);
send_json(['files' => $results]);
