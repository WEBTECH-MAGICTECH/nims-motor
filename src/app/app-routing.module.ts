import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdminMainPageComponent } from './components/admin/admin-main-page/admin-main-page.component';
import { AdminManageBookingComponent } from './components/admin/admin-manage-booking/admin-manage-booking.component';
import { AdminManageCustomerComponent } from './components/admin/admin-manage-customer/admin-manage-customer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { BookingComponent } from './components/booking/booking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent},
  {path: 'adminmain', component: AdminMainPageComponent},
  {path: 'adminmanagebooking', component: AdminManageBookingComponent},
  {path: 'adminmanagecustomer', component: AdminManageCustomerComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'roomdetails', component: RoomDetailsComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'booking-history', component: BookingHistoryComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
