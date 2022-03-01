export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function arrayBufferToBase64URLencode(buffer: ArrayBuffer): string {
  return arrayBufferToBase64(buffer)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

export function randomString(length: number): string {
  const array = new Uint32Array(length / 2);
  crypto.getRandomValues(array);
  return Array.from(array, (dec) => ('0' + dec.toString(16)).slice(-2)).join(
    '',
  );
}

export async function sha256(plain: string): Promise<ArrayBuffer> {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return crypto.subtle.digest('SHA-256', data);
}

// แปลงหน่วยเวลา
export function localTimeString(date: Date): string {
  const dateText = `${date.getFullYear()}-${(
    '00' +
    (date.getMonth() + 1)
  ).slice(-2)}-${('00' + date.getDate()).slice(-2)}`;
  const timeText = `${('00' + date.getHours()).slice(-2)}:${(
    '00' + date.getMinutes()
  ).slice(-2)}:${('00' + date.getSeconds()).slice(-2)}`;

  return `${dateText}T${timeText}`;
}
