import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { TopicService } from 'src/app/utils/topic-service.service';
import { WhoFollowsService } from 'src/app/utils/who-follows.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.scss'],
})
export class RightBarComponent {
  topics: any[] = [];
  isFocused: boolean = false;
  isOpenSearchList: boolean = false;
  searchValue: string = '';
  whofollows: any[] = [];
  modalId: number;
  modalName: string = '';
  isHovered: boolean = false;
  modalRef?: BsModalRef;
  @ViewChild('clickAway') clickAway: ElementRef;

  constructor(
    private elementRef: ElementRef,
    private topicService: TopicService,
    private followService: WhoFollowsService,
    private modalService: BsModalService
  ) {
    this.topics = topicService.getTopics();
    this.whofollows = followService.getAccounts();
  }

  openModal(template: TemplateRef<any>, id: number, name: string) {
    this.modalId = id;
    this.modalName = name;
    this.modalRef = this.modalService.show(template, { id: id });
  }

  onFocus() {
    this.isFocused = true;
    this.isOpenSearchList = true;
  }

  onBlur() {
    this.isFocused = false;
  }

  onMouseOver() {
    setTimeout(() => {
      this.isHovered = true;
    }, 500);
  }

  onMouseOut() {
    setTimeout(() => {
      this.isHovered = false;
    }, 500);
  }

  setFollow(id: number) {
    this.followService.setFollowing(id);
  }

  formatter(num: number) {
    let config = {};
    if (num > 9999) {
      config = {
        notation: 'compact',
        maximumFractionDigits: 1,
      };
    }
    return new Intl.NumberFormat('tr', config).format(num);
  }

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (!this.clickAway.nativeElement.contains(event.target)) {
      this.isOpenSearchList = false;
    }
  }
}
