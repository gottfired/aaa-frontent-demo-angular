import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private favoritesName = 'favorites';
  private commentsName = 'comments';

  constructor() { }

  setFavorites(ids: number[]) {
    localStorage.setItem(this.favoritesName, JSON.stringify(ids));
  }

  getFavorites(): number[] {
    const data = localStorage.getItem(this.favoritesName);
    return JSON.parse(data);
  }

  clearFavorites() {
    localStorage.removeItem(this.favoritesName);
  }

  setComments(comments: any) {
    localStorage.setItem(this.commentsName, JSON.stringify(comments));
  }

  getComments(): number[] {
    const data = localStorage.getItem(this.commentsName);
    return JSON.parse(data);
  }

  clearComments() {
    localStorage.removeItem(this.commentsName);
  }

  cleanAll() {
    localStorage.clear();
  }
}
