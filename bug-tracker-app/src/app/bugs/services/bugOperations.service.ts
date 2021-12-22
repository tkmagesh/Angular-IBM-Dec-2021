import { Injectable } from '@angular/core';
import { Bug } from '../models/bug';

@Injectable({
    providedIn: 'root'
})
export class BugOperations{
    
    private _currentBugId: number = 0;
    createNew(bugName : string){
        const newBug : Bug = {
            id : ++this._currentBugId,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        return newBug;
    }

    toggle(bug: Bug) {
      bug.isClosed = !bug.isClosed;
    }
}