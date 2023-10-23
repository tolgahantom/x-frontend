import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private topics = [
    {
      title: 'Spor - Gündemdekiler',
      topic: {
        type: 'tag',
        value: 'FenerinMaçıVar',
      },
      postCount: 19070,
    },
    {
      title: 'Gündemdekiler',
      topic: {
        type: 'query',
        value: 'Fiyat',
      },
      postCount: 5378,
    },
    {
      title: 'Türkiye tarihinde gündemde',
      topic: {
        type: 'query',
        value: 'Motorlu Taşıtlar Vergisi',
      },
      postCount: 2487,
    },
  ];
  constructor() {}

  getTopics() {
    return this.topics;
  }
}
