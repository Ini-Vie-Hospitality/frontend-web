import { createHmac, timingSafeEqual } from 'node:crypto';

export function isPreviewTokenValid(expires: string | undefined, signature: string | undefined, secret: string): boolean {
  if (!expires || !signature || !secret || Number(expires) <= Math.floor(Date.now() / 1000)) return false;
  const expected = createHmac('sha256', secret).update(expires).digest('hex');
  return signature.length === expected.length && timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}
