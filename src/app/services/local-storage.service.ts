import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private favoritesName = 'favorites';

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

  cleanAll() {
    localStorage.clear();
  }
}
