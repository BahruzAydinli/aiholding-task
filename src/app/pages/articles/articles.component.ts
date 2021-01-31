import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: any = [];

  headElements = ['#', 'Author', 'Title', 'Published', ''];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.appService.getList({}, this.appService.ARTICLES).subscribe((res) => {
      this.articles = res;
    });
  }

  deleteItem(id: number) {
    this.appService
      .deleteData(id, this.appService.ARTICLES)
      .subscribe((res) => {
        this.getArticles();
      });
  }
}
