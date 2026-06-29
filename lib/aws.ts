export async function createSignedUploadUrl(fileName: string) { return { url: '/api/upload', key: 'demo/' + fileName }; }
