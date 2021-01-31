import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.scss'],
})
export class ArticleUpdateComponent implements OnInit {
  public Editor = ClassicEditor;
  selected_language: string = 'az';
  form: FormGroup;
  languages: any = [];

  constructor(
    private router: Router,
    private appService: AppService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.appService.getList({}, this.appService.LANGUAGES).subscribe((res) => {
      this.languages = res;
    });

    this.form = this.fb.group({
      title_az: ['', Validators.required],
      title_en: ['', Validators.required],
      description_az: ['', Validators.required],
      description_en: ['', Validators.required],
      isPremium: [false],
    });
  }

  addItem() {
    let obj = {
      Content: [
        {
          locale: 'az',
          title: this.form.value.title_az,
          description: this.form.value.description_az,
        },
        {
          locale: 'en',
          title: this.form.value.title_en,
          description: this.form.value.description_en,
        },
      ],
      isPremium: this.form.value.isPremium,
    };
    this.appService.postdata(obj, this.appService.ARTICLES).subscribe((res) => {
      this.router.navigate(['/articles']);
    });
  }
}
