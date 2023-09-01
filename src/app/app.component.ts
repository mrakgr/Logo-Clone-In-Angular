import { Component, ElementRef, ViewChild } from '@angular/core';
import * as monaco from 'monaco-editor'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logo-clone';

  @ViewChild('setupMonaco') private monacoRef: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('setupCanvas') private canvasRef: ElementRef<HTMLCanvasElement> | undefined;

  ngAfterViewInit() {
    if (!this.monacoRef) throw Error("monaco not inited")

    const uri = monaco.Uri.parse("inmemory://test");
    const value = window.localStorage.getItem("text") ?? "forward 150\nbackward"
    const model = monaco.editor.createModel(value, "logo-clone-lang", uri);
    const editor = monaco.editor.create(this.monacoRef.nativeElement, { model });
  }
}
