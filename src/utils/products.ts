import { getApiUrl } from './api';

export interface ProductVariantItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface ProductItem {
  id: number;
  name: string;
  variants: ProductVariantItem[];
  createdAt: string;
}

export interface ProductVariantPayload {
  title: string;
  image: string;
  description: string;
}

export interface ProductPayload {
  name: string;
  variants: ProductVariantPayload[];
}

const normalizeVariant = (item: any): ProductVariantItem | null => {
  const id = Number(item?.id);
  const title = item?.title?.trim?.();
  const image = item?.image?.trim?.() || '';
  const description = item?.description?.trim?.() || '';

  if (!Number.isFinite(id) || !title) {
    return null;
  }

  return {
    id,
    title,
    image,
    description,
  };
};

const normalizeProduct = (item: any): ProductItem | null => {
  const id = Number(item?.id);
  const name = item?.name?.trim?.();
  const createdAt = item?.created_at ?? item?.createdAt ?? '';
  const rawVariants = Array.isArray(item?.variants)
    ? item.variants
    : Array.isArray(item?.product_variants)
      ? item.product_variants
      : Array.isArray(item?.items)
        ? item.items
        : [];

  if (!Number.isFinite(id) || !name) {
    return null;
  }

  return {
    id,
    name,
    createdAt,
    variants: rawVariants
      .map(normalizeVariant)
      .filter((variant: ProductVariantItem | null): variant is ProductVariantItem => variant !== null),
  };
};

export const getProductItems = async () => {
  const response = await fetch(getApiUrl('/api/products'), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error('Invalid products response');
  }

  return data
    .map(normalizeProduct)
    .filter((item): item is ProductItem => item !== null);
};

export const createProductItem = async (item: ProductPayload) => {
  const response = await fetch(getApiUrl('/api/products'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error('Failed to save product.');
  }

  const data = await response.json().catch(() => null);
  return normalizeProduct(data);
};

export const removeProductItem = async (id: number) => {
  const response = await fetch(getApiUrl(`/api/products?id=${id}`), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete product.');
  }

  return true;
};
