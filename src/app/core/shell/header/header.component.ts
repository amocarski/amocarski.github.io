import { Component, OnInit } from '@angular/core';

import { I18nService } from '../../i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuHidden = true;

  constructor(private i18nService: I18nService) { }

  ngOnInit() { }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  parseLanguageName(language: string) {
    switch(language) {
      case 'en-US':
        return 'ENG';
      case 'pl-PL':
        return 'POL';
    }
  }

  get currentLanguage(): string {
    return this.parseLanguageName(this.i18nService.language);
  }

  get languages() {
    const languagesArray: Array<object> = [];
    this.i18nService.supportedLanguages.forEach((languageCode, index) => {
      languagesArray.push({'code': languageCode, 'name': this.parseLanguageName(languageCode)});
    });

    return languagesArray;
  }



}
