import ResizeObserver from 'resize-observer-polyfill';
import { RowKey, RowElement, GroupDatasetKey } from './types';
import { JdColrowGroup } from './JdColrowGroup';

export class JdColrowObserver {
  protected groupMap!: Map<RowKey, JdColrowGroup>;
  protected resizeObserver!: ResizeObserver;
  constructor() {
    this.groupMap = new Map();
    this.resizeObserver = new ResizeObserver(this.onResizeObserved.bind(this));
  }

  groupOf(key: RowKey): JdColrowGroup | undefined {
    return this.groupMap.get(key);
  }

  joinGroup(key: RowKey, el: RowElement): JdColrowGroup {
    let group = this.groupOf(key);
    if (!group) {
      group = new JdColrowGroup();
      group.initKey(key);
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

  onResizeObserved(entries: ResizeObserverEntry[]) {
    const keys: string[] = [];
    for (const entry of entries) {
      const target = entry.target as HTMLElement;
      const key = target.dataset[GroupDatasetKey] as string;
      if (key && keys.indexOf(key) === -1) {
        keys.push(key);
      }
    }
    keys.forEach(key => this.aggregateRow(key));
  }

  aggregateRow(key: RowKey) {
    const group = this.groupOf(key);
    if (group) {
      group.aggregate();
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
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
    } catch (err) {
      console.error(err);
    }
  }
}