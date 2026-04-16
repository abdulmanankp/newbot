<?php
// Storage API configuration
// --- Random key generator for onboarding ---
function random_key($len = 16) {
    return bin2hex(random_bytes($len));
}

$access_key = getenv('STORAGE_API_ACCESS_KEY') ?: 'client_' . substr(random_key(8), 0, 8);
$secret_key = getenv('STORAGE_API_SECRET_KEY') ?: random_key(16);

if (!getenv('STORAGE_API_ACCESS_KEY')) {
    file_put_contents(__DIR__ . '/.generated_keys', "ACCESS_KEY=$access_key\nSECRET_KEY=$secret_key\n");
}

return [
    // API keys (in production, store securely!)
    'api_keys' => [
        $access_key => $secret_key,
    ],
    // Allowed file types (MIME => extension)
    'allowed_types' => [
        'image/jpeg' => 'jpg',
        'image/png' => 'png',
        'image/gif' => 'gif',
        'application/pdf' => 'pdf',
        'application/msword' => 'doc',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' => 'docx',
        'application/vnd.ms-excel' => 'xls',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' => 'xlsx',
        'text/plain' => 'txt',
    ],
    // Max file size (in bytes)
    'max_size' => 10 * 1024 * 1024, // 10MB
    // Upload root directory
    'upload_root' => __DIR__ . '/uploads',
    // Log file
    'log_file' => __DIR__ . '/storage_api.log',
    // Rate limit (requests per minute per client)
    'rate_limit' => 60,
];
