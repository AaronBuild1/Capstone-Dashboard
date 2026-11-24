/* ---------- icons: inlined Lucide subset ---------- */
import { ICONS } from 'virtual:icons';
import { esc } from './utils.js';

export const _icCache = {};
export function ic(name, size = 16, cls = '') {
  const k = name + '|' + size + '|' + cls;
  if (_icCache[k]) return _icCache[k];
  const inner = ICONS[name] || '<rect x="5" y="5" width="14" height="14" rx="3"/>';
  return (_icCache[k] =
    `<svg class="i ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`);
}

/* Capstone wordmark and app mark. */
export const LOGO = (h = 22) =>
  `<svg class="logo" height="${h}" width="${Math.round(h * 5.85)}" viewBox="0 0 164 28" role="img" aria-label="Capstone"><path d="M21 6H13A8 8 0 1 0 13 22H21" fill="none" stroke="#B8490A" stroke-width="4" stroke-linecap="square"/><text x="30" y="20" fill="currentColor" font-family="Geist,Arial,sans-serif" font-size="17" font-weight="650" letter-spacing="1.35">CAPSTONE</text></svg>`;
export const MARK = (px = 22) =>
  `<svg width="${px}" height="${px}" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="7" fill="#B8490A"/><path d="M23 8H15A8 8 0 1 0 15 24H23" fill="none" stroke="#F2EDE6" stroke-width="4" stroke-linecap="square"/></svg>`;
export function wsLogo(w, px = 22) {
  return w && w.brand
    ? `<span class="ws-logo brand" style="width:${px}px;height:${px}px">${MARK(px)}</span>`
    : `<span class="ws-logo" style="--c:${w.c};width:${px}px;height:${px}px;font-size:${Math.max(9, Math.round(px * 0.46))}px">${esc(w.name[0])}</span>`;
}
