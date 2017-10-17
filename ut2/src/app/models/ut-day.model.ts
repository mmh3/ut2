import { UtEntry } from '../models/ut-entry.model';

export class UtDay {
    public date: Date;
    public entries: Array<UtEntry> = [];

    constructor(date: Date, entry: UtEntry) {
        this.date = date;
        this.entries.push(entry);
    }

    addEntry(entry: UtEntry) {
        this.entries.push(entry);
    }
}
