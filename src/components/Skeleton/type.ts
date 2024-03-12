import type { VNodeChild } from 'vue';

export type VSkeletonProps = {
  text?: string | VNodeChild;
  rows?: number;
};
