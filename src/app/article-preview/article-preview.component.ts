import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { TagListComponent } from '../tag-list/tag-list.component';
import { TagComponent } from '../tag/tag.component';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { Article } from '../article';
import { ArticleComponent } from '../article/article.component';
import { ArticleListComponent } from '../article-list/article-list.component';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [ArticleListComponent],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css'
})
export class ArticlePreviewComponent {
  @HostBinding('class') class = 'article-preview' ;
  
    articles = [ 
      new Article({
      id:1 ,
      title:
      'Ill quantify the redundant TCP bus, that should hard drive the ADP bandwidth!',
    content: `
    Aut facilis qui. Cupiditate sit ratione eum sunt rerum impedit. Qui suscipit 
     debitis et et voluptates voiuptatem voluptatibus. Quas voluptatum quae
     corporis corporis possimus.
     `,
      favoriteCount: 30,
      author: 'Oliver',
      createDate: new Date(2024, 6 ,4),
      tags: ['enim', 'repellat', 'est', 'eos'],
    }),
    new Article({
      id:2 ,
      title:
      'Ill quantify the redundant TCP bus, that should hard drive the ADP bandwidth!',
    content: `
    Aut facilis qui. Cupiditate sit ratione eum sunt rerum impedit. Qui suscipit 
     debitis et et voluptates voiuptatem voluptatibus. Quas voluptatum quae
     corporis corporis possimus.
     `,
      favoriteCount: 30,
      author: 'Oliver',
      createDate: new Date(2024, 6 ,4),
      tags: ['enim', 'repellat', 'est', 'eos'],
    }),
  ];
}
 
