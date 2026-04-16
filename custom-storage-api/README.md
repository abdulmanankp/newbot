# Custom Storage API (PHP)

A secure, scalable file storage API for shared hosting (Hostinger), acting as a cloud-like storage service.

## Features
- File upload API (POST /upload)
- File delete API (DELETE /delete)
- File listing API (GET /list)
- API key authentication
- File validation (type, size)
- Directory structure: `/uploads/{client_id}/{date}/`
- Public file URLs
- Logging (storage_api.log)
- Basic rate limiting
- Security: input sanitization, .htaccess protection, MIME checks

## Endpoints

### Upload File
- `POST /upload`
- Headers: `Authorization: Bearer {api_key}`
- Form-data: `file`
- Response: `{ "url": "...", "path": "..." }`

### Delete File
- `DELETE /delete`
- Headers: `Authorization: Bearer {api_key}`
- JSON body: `{ "path": "/uploads/client_id/date/filename.ext" }`
- Response: `{ "success": true }`

### List Files
- `GET /list`
- Headers: `Authorization: Bearer {api_key}`
- Response: `{ "files": [ ... ] }`

## Security
- Only allowed file types (see config.php)
- Max file size: 10MB (configurable)
- API key-based access
- Rate limiting per client
- All inputs sanitized
- .htaccess prevents direct PHP access

## Setup
1. Upload all files to your Hostinger account (e.g., `/public_html/custom-storage-api/`).
2. Edit `config.php` to set your API keys and allowed types.
3. Make sure `/uploads` is writable by PHP.
4. Use the API endpoints as documented.

## Credentials Example
- **Endpoint:** `https://yourdomain.com/custom-storage-api/`
- **Region:** (your server location, e.g., `eu1`)
- **Access Key:** `demo_client`
- **Access Secret:** `demo_secret`

## Notes
- For production, generate strong API keys and secrets.
- Adjust allowed file types and size as needed.
- Logs are written to `storage_api.log`.

---

**This system is optimized for shared hosting and is not intended for high-traffic or sensitive data.**
