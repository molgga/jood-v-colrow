import 'intersection-observer';
import ResizeObserver from 'resize-observer-polyfill';
import { RowKey, RowElement, GroupDatasetKey, GroupOptions } from './types';
import { JdColrowGroup } from './JdColrowGroup';

export class JdColrowObserver {
  protected groupMap!: Map<RowKey, JdColrowGroup>;
  protected resizeObserver!: ResizeObserver;
  protected mutationObserver!: MutationObserver;
  protected intersectObserver!: IntersectionObserver;
  protected elContainer!: HTMLElement;
  protected aggregateWaitKeys: RowKey[] = [];
  protected isIntersectInitial = false;
  protected isIntersecting = true;

  constructor() {
    this.groupMap = new Map();
    this.resizeObserver = new ResizeObserver(this.onResizeObserved.bind(this));
    this.mutationObserver = new MutationObserver(this.onMutationObserved.bind(this));
    this.intersectObserver = new IntersectionObserver(this.onIntersectObserved.bind(this));
  }

  groupOf(key: RowKey): JdColrowGroup | undefined {
    return this.groupMap.get(key);
  }

  joinGroup(key: RowKey, el: RowElement, options: GroupOptions = {}): JdColrowGroup {
    let group = this.groupOf(key);
    if (!group) {
      group = new JdColrowGroup();
      group.initKey(key);
      group.assignOptions(options);
      this.groupMap.set(key, group);
    }
    if (group.indexElementOf(el) === -1) {
      group.addElement(el);
      this.resizeObserver.observe(el);
    }
    return group;
  }

  unjoinGroup(key: RowKey, el: RowElement): void {
    const group = this.groupOf(key);
    if (!group) return;
    if (group.indexElementOf(el) !== -1) {
      group.removeElement(el);
      this.resizeObserver.unobserve(el);
    }
  }

  attachContainer(el: HTMLElement) {
    if (this.elContainer) return;
    this.intersectObserver.observe(el);
    this.mutationObserver.observe(el, { attributes: true, childList: true, characterData: true });
    this.elContainer = el;
  }

  onResizeObserved(entries: ResizeObserverEntry[]) {
    const keys: string[] = [];
    for (const entry of entries) {
      const target = entry.target as HTMLElement;
      const key = target.dataset[GroupDatasetKey] as string;
      if (key && keys.indexOf(key) === -1) {
        keys.push(key);
      }
    }
    this.aggregateWaitKeys = keys;
    if (this.isIntersectInitial && this.isIntersecting) {
      this.flushAggregateWait();
    }
  }

  onMutationObserved(records: MutationRecord[]) {
    const keys = Array.from(this.groupMap.keys());
    this.aggregateWaitKeys = keys;
    if (this.isIntersectInitial && this.isIntersecting) {
      this.flushAggregateWait();
    }
  }

  onIntersectObserved(entries: IntersectionObserverEntry[]) {
    const { isIntersecting = false } = entries[0] || {};
    this.isIntersecting = !!isIntersecting;
    this.isIntersectInitial = true;
    if (this.isIntersecting) {
      this.flushAggregateWait();
    }
  }

  aggregateRow(key: RowKey) {
    const group = this.groupOf(key);
    if (group) {
      group.aggregate();
    }
  }

  protected flushAggregateWait() {
    if (this.aggregateWaitKeys && this.aggregateWaitKeys.length) {
      this.aggregateWaitKeys.forEach(key => this.aggregateRow(key));
      this.aggregateWaitKeys = [];
    }
  }

  destroyGroup(key: RowKey) {
    const group = this.groupOf(key);
    if (group) {
      group.destory();
      this.groupMap.delete(key);
    }
  }

  destroy() {
    try {
      Array.from(this.groupMap.keys()).forEach(key => {
        this.destroyGroup(key);
      });
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
    } catch (err) {
      console.error(err);
    }
  }
}
