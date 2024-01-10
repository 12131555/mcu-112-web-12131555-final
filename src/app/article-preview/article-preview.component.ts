import { CommonModule, NgFor } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { TagListComponent } from '../tag-list/tag-list.component';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [NgFor, TagComponent],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css'
})
export class ArticlePreviewComponent {
  @HostBinding('class') class = 'article-preview' 
  tags = ['enim', 'repellat', 'est', 'eos'];
}
