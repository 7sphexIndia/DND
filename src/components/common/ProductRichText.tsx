import React from 'react';

interface ProductRichTextProps {
  content: string;
  className?: string;
}

const allowedTags = new Set([
  'p',
  'br',
  'strong',
  'b',
  'em',
  'i',
  'u',
  'ul',
  'ol',
  'li',
  'blockquote',
  'div',
  'span',
]);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const sanitizeNode = (node: Node): string => {
  if (node.nodeType === Node.TEXT_NODE) {
    return escapeHtml(node.textContent || '');
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return '';
  }

  const element = node as HTMLElement;
  const tagName = element.tagName.toLowerCase();
  const content = Array.from(element.childNodes).map(sanitizeNode).join('');

  if (!allowedTags.has(tagName)) {
    return content;
  }

  let attributes = '';
  const textAlign = element.style?.textAlign;

  if (textAlign && ['left', 'center', 'right', 'justify'].includes(textAlign)) {
    attributes = ` style="text-align:${textAlign}"`;
  }

  return `<${tagName}${attributes}>${content}</${tagName}>`;
};

const normalizePlainText = (content: string) => {
  const lines = content.split(/\r?\n/);
  const blocks: string[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push(`<ul>${listItems.join('')}</ul>`);
      listItems = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      listItems.push(`<li>${escapeHtml(trimmed.replace(/^[-*]\s+/, ''))}</li>`);
      return;
    }

    flushList();
    blocks.push(`<p>${escapeHtml(trimmed)}</p>`);
  });

  flushList();

  return blocks.join('');
};

const sanitizeHtml = (content: string) => {
  if (typeof window === 'undefined') {
    return normalizePlainText(content);
  }

  const hasHtml = /<\/?[a-z][\s\S]*>/i.test(content);

  if (!hasHtml) {
    return normalizePlainText(content);
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');

  return Array.from(doc.body.childNodes).map(sanitizeNode).join('');
};

const ProductRichText: React.FC<ProductRichTextProps> = ({
  content,
  className = 'text-[#333333] text-[15px] sm:text-[16px] font-normal',
}) => {
  const sanitizedContent = sanitizeHtml(content);

  return (
    <div
      className={`${className} product-rich-text space-y-3 [&_blockquote]:border-l-4 [&_blockquote]:border-[#D9E2EC] [&_blockquote]:pl-4 [&_blockquote]:italic [&_li]:ml-2 [&_ol]:list-decimal [&_ol]:space-y-[6px] [&_ol]:pl-5 [&_p]:mb-0 [&_ul]:list-disc [&_ul]:space-y-[6px] [&_ul]:pl-5`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

export default ProductRichText;
