import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-document-upload',
  imports: [CommonModule],
  templateUrl: './document-upload.html',
  styleUrl: './document-upload.css',
})
export class DocumentUpload {
    activeTab: 'active' | 'document' | 'recording' | 'CCourse' = 'active';

     activeTab1: 'course-1' | 'course-2' = 'course-1';

      activeTab2: 'batch-1' | 'batch-2' | 'batch-3' = 'batch-1';

  /* VIDEO */
  selectedVideo: string | null = null;

  /* FILE FILTER */
  selectedFileType: 'all' | 'pdf' | 'xls' | 'doc' | 'ppt' = 'all';

  /* ACTIVE FILES */
  files = [
    { name: 'Module1 Document1.pdf', uploadedBy: 'Batch 1', date: '26-12-2025', size: '23.8 MB' },
    { name: 'Module1 Document2.xls', uploadedBy: 'Batch 2', date: '26-12-2025', size: '18.1 MB' },
    { name: 'Module1 Notes.ppt', uploadedBy: 'Batch 1', date: '26-12-2025', size: '10.5 MB' },
    { name: 'Module1 Summary.doc', uploadedBy: 'Batch 4', date: '26-12-2025', size: '9.3 MB' },
  ];

  /* COMPLETED FILES */
  completedFiles = [
    { name: 'Final Report.pdf', uploadedBy: 'Jacob Jones', date: '12-12-2025', size: '15.4 MB' },
    { name: 'Completion Summary.docx', uploadedBy: 'Jacob Jones', date: '15-12-2025', size: '11.2 MB' },
    { name: 'Presentation.ppt', uploadedBy: 'Jacob Jones', date: '18-12-2025', size: '9.8 MB' },
  ];

  /* TAB SWITCH */
  setTab(tab: 'active' | 'document' | 'recording' | 'CCourse') {
    this.activeTab = tab;
    this.selectedVideo = null;
    this.selectedFileType = 'all';
  }

    switchBatch(tab: 'batch-1'|'batch-2'|'batch-3') {
    this.activeTab2 = tab;
  }

  /* VIDEO */
  // playVideo(src: string) {
  //   this.selectedVideo = src;
  //   this.activeTab = 'completed';
  // }

  closePlayer() {
    this.selectedVideo = null;
  }

  /* FILE FILTER */
  setFileFilter(type: 'all' | 'pdf' | 'xls' | 'doc' | 'ppt') {
    this.selectedFileType = type;
  }

  getFileExtension(fileName: string): string {
    return fileName.split('.').pop()?.toLowerCase() || '';
  }

  /* FILTERED ACTIVE FILES */
  get filteredFiles() {
    if (this.selectedFileType === 'all') return this.files;

    return this.files.filter(file => {
      const ext = this.getFileExtension(file.name);
      if (this.selectedFileType === 'pdf') return ext === 'pdf';
      if (this.selectedFileType === 'xls') return ext === 'xls' || ext === 'xlsx';
      if (this.selectedFileType === 'doc') return ext === 'doc' || ext === 'docx';
      if (this.selectedFileType === 'ppt') return ext === 'ppt' || ext === 'pptx';
      return true;
    });
  }

  /* FILTERED COMPLETED FILES */
  get filteredCompletedFiles() {
    if (this.selectedFileType === 'all') return this.completedFiles;

    return this.completedFiles.filter(file => {
      const ext = this.getFileExtension(file.name);
      if (this.selectedFileType === 'pdf') return ext === 'pdf';
      if (this.selectedFileType === 'xls') return ext === 'xls' || ext === 'xlsx';
      if (this.selectedFileType === 'doc') return ext === 'doc' || ext === 'docx';
      if (this.selectedFileType === 'ppt') return ext === 'ppt' || ext === 'pptx';
      return true;
    });
  }

  /* ICON */
  getFileIcon(fileName: string): string {
    const ext = this.getFileExtension(fileName);
    if (ext === 'pdf') return '/pdf.png';
    if (ext === 'xls' || ext === 'xlsx') return '/xls.png';
    if (ext === 'ppt' || ext === 'pptx') return '/ppt.png';
    if (ext === 'doc' || ext === 'docx') return '/doc.png';
    return '/file.png';
  }

  
}
