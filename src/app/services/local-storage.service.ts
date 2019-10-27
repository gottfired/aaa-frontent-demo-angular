import { Injectable } from '@angular/core';
import { IComments } from '../types/Beer';



@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  static favoritesName = 'favorites';
  static commentsName = 'comments';
  static credentialsName = 'credentials';


  constructor() { }

  setFavorites(ids: number[]) {
    localStorage.setItem(LocalStorageService.favoritesName, JSON.stringify(ids));
  }

  getFavorites(): number[] {
    const data = localStorage.getItem(LocalStorageService.favoritesName);
    return JSON.parse(data);
  }

  setComments(comments: any) {
    localStorage.setItem(LocalStorageService.commentsName, JSON.stringify(comments));
  }

  getComments(): IComments {
    const data = localStorage.getItem(LocalStorageService.commentsName);
    return JSON.parse(data);
  }

  // Generalized fuctions

  set(name: string, value: any) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  clear(name: string) {
    localStorage.removeItem(name);
  }

  get(name: string): any {
    const data = localStorage.getItem(name);
    return JSON.parse(data);
  }

  cleanAll() {
    this.clear(LocalStorageService.favoritesName);
    this.clear(LocalStorageService.commentsName);
    // DO NOT clear credentials
  }
}
