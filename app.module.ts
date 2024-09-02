import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { SavingaccountComponent } from './savingaccount/savingaccount.component';
import { PersonalloansComponent } from './personalloans/personalloans.component';
import { OnlinebankingComponent } from './onlinebanking/onlinebanking.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { AdminComponent } from './admin/admin.component';
import { ResponseComponent } from './response/response.component';
import { AccountComponent } from './account/account.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoanApplicationComponent } from './personalloans/loan-application/loan-application.component';
import { LoanDetailsComponent } from './personalloans/loan-details/loan-details.component';
import { LoanHistoryComponent } from './personalloans/loan-history/loan-history.component';
import { LoanApprovalComponent } from './personalloans/loan-approval/loan-approval.component';
import { LoanService } from './loan.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserOnlineBankComponent } from './onlinebanking/user-online-bank/user-online-bank.component';
import { BillPaymentComponent } from './onlinebanking/bill-payment/bill-payment.component';
import { TransactionComponent } from './onlinebanking/transaction/transaction.component';
import { CommonModule } from '@angular/common';
import { OnlineAdminComponent } from './onlinebanking/online-admin/online-admin.component';
import { ManagerComponent } from './manager/manager.component';
import { UpdateAccountComponent } from './account/update-account/update-account.component';
import { DocumentComponent } from './document/document.component';
import { AdminDocumentComponent } from './document/admin-document/admin-document.component';
import { MaindashComponent } from './maindash/maindash.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    UserListComponent,
    SavingaccountComponent,
    PersonalloansComponent,
    OnlinebankingComponent,
    LoginComponent,
    MessageComponent,
    AdminComponent,
    ResponseComponent,
    AccountComponent,
    UserProfileComponent,
    LoanApplicationComponent,
    LoanDetailsComponent,
    LoanHistoryComponent,
    LoanApprovalComponent,
    UserOnlineBankComponent,
    BillPaymentComponent,
    TransactionComponent,
    OnlineAdminComponent,
    ManagerComponent,
    UpdateAccountComponent,
    DocumentComponent,
    AdminDocumentComponent,
    MaindashComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, // Add HttpClientModule here
    CommonModule,
    BrowserAnimationsModule, // Properly handle animations




  ],
  providers: [LoanService, provideAnimationsAsync()],
  bootstrap: [AppComponent]


})
export class AppModule { }
