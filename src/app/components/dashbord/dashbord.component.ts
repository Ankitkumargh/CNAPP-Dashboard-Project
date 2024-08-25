import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {
  
  isPanelOpen = false;
  selectedTab = 'CSPM'; // Default tab
  searchQuery = '';

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }
  closePanel() {
    this.isPanelOpen = false;
  }
  setTab(tab: string) {
    this.selectedTab = tab;
  }
  
  checkboxStates: boolean[] = [false, false, false, false,false,false];

  shouldShowItem(itemName: string): boolean {
    return itemName.toLowerCase().includes(this.searchQuery.toLowerCase());
  }
  shouldHighlightItem(itemName: string): boolean {
    return this.searchQuery.length > 0 && itemName.toLowerCase().includes(this.searchQuery.toLowerCase());
  }
}
