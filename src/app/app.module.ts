import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ListsComponent } from './pages/lists/lists.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PopoverModule } from 'ngx-smart-popover';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    NotificationsComponent,
    NotFoundComponent,
    LeftSidebarComponent,
    ContentComponent,
    RightBarComponent,
    MessagesComponent,
    ListsComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PopoverModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
