import { Subject, Observable } from 'rxjs';
import { RowElement, RowKey, GroupState } from './types';

export class JdColrowGroup {
  protected key!: RowKey;
  protected tick: any = null;
  protected stateSubject = new Subject<GroupState>();
  protected elList: RowElement[] = [];

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

  aggregate(): void {
    cancelAnimationFrame(this.tick);
    requestAnimationFrame(() => {
      this.aggregateExecute();
    });
    // clearTimeout(this.tick);
    // this.tick = setTimeout(() => {
    //   this.aggregateExecute();
    // }, 10);
  }

  aggregateExecute(): void {
    let max: number = 0;
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
