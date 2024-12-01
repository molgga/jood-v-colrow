import { Subject, Observable } from 'rxjs';
import { RowElement, RowKey, GroupState, GroupOptions } from './types';

export class JdColrowGroup {
  private key!: RowKey;
  private tick: any = null;
  private stateSubject = new Subject<GroupState>();
  private elList: RowElement[] = [];
  private lazyAggregate = 0;

  get groupKey() {
    return this.key;
  }

  get groupTick() {
    return this.tick;
  }

  get groupElements() {
    return this.elList;
  }

  initKey(key: RowKey): void {
    if (this.key) throw new Error('already bind key');
    this.key = key;
  }

  assignOptions(option: GroupOptions = {}) {
    const { lazyAggregate = 0 } = option;
    this.setLazyAggregate(lazyAggregate);
  }

  setLazyAggregate(delay: number) {
    this.lazyAggregate = delay;
  }

  aggregate(): void {
    if (0 < this.lazyAggregate) {
      clearTimeout(this.tick);
      this.tick = setTimeout(() => {
        this.aggregateExecute();
      }, this.lazyAggregate);
    } else {
      cancelAnimationFrame(this.tick);
      this.tick = requestAnimationFrame(() => {
        this.aggregateExecute();
      });
    }
  }

  aggregateExecute(): void {
    let max = 0;
    this.elList.forEach(el => {
      max = Math.max(max, el.offsetHeight);
    });
    this.stateSubject.next({ expectHeight: max });
  }

  observeState(): Observable<GroupState> {
    return this.stateSubject.asObservable();
  }

  addElement(el: RowElement): void {
    const index = this.indexElementOf(el);
    if (index === -1) {
      this.elList.push(el);
    }
  }

  indexElementOf(el: RowElement): number {
    return this.elList.indexOf(el);
  }

  removeElement(el: RowElement): void {
    const index = this.indexElementOf(el);
    if (index !== -1) {
      this.elList.splice(index, 1);
    }
  }

  destory() {
    try {
      cancelAnimationFrame(this.tick);
      this.stateSubject.unsubscribe();
      this.elList = [];
    } catch (err) {
      console.error(err);
    }
  }
}
