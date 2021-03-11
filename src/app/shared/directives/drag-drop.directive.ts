import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dragDrop]'
})
export class DragDropDirective {
	
  @Output() onFileDropped = new EventEmitter<any>();
	
  @HostBinding('style.background-color') private background = '#f5f6fb'
  @HostBinding('style.opacity') private opacity = '1'
	
  @HostListener('dragover', ['$event']) onDragOver(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.background = '#ffffff';
    this.opacity = '0.8'
  }
	
  @HostListener('dragleave', ['$event']) onDragLeave(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.background = '#f5f6fb'
    this.opacity = '1'
  }
	
  @HostListener('drop', ['$event']) ondrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.background = '#f5f6fb'
    this.opacity = '1'
    let files = e.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files)
    }
  }
	
}