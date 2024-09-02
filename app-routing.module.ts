import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { OnlinebankingComponent } from './onlinebanking/onlinebanking.component';
import { PersonalloansComponent } from './personalloans/personalloans.component';
import { SavingaccountComponent } from './savingaccount/savingaccount.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { AdminComponent } from './admin/admin.component';
import { ResponseComponent } from './response/response.component';
import { AccountComponent } from './account/account.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoanApplicationComponent } from './personalloans/loan-application/loan-application.component';
import { LoanApprovalComponent } from './personalloans/loan-approval/loan-approval.component';
import { LoanHistoryComponent } from './personalloans/loan-history/loan-history.component';
import { LoanDetailsComponent } from './personalloans/loan-details/loan-details.component';
import { TransactionComponent } from './onlinebanking/transaction/transaction.component';
import { BillPaymentComponent } from './onlinebanking/bill-payment/bill-payment.component';
import { UserOnlineBankComponent } from './onlinebanking/user-online-bank/user-online-bank.component';
import { OnlineAdminComponent } from './onlinebanking/online-admin/online-admin.component';
import { ManagerComponent } from './manager/manager.component';
import { UpdateAccountComponent } from './account/update-account/update-account.component';
import { DocumentComponent } from './document/document.component';
import { AdminDocumentComponent } from './document/admin-document/admin-document.component';
import { MaindashComponent } from './maindash/maindash.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent }, 
  {path: 'user', component: UserComponent }, 
  {path: '', redirectTo: 'home', pathMatch: 'full' } ,
  {path: 'userlist' , component: UserListComponent},
  {path: 'onlinebanking' , component: OnlinebankingComponent},
  {path: 'personalloans', component: PersonalloansComponent},
  {path: 'savingaccount' , component: SavingaccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'message', component: MessageComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'response', component:ResponseComponent},
  {path: 'account', component: AccountComponent},
  {path: 'userprofile', component:UserProfileComponent},
  {path: 'loanapplication', component:LoanApplicationComponent},
  {path: 'loanapproval', component: LoanApprovalComponent},
  {path: 'loanhistory', component: LoanHistoryComponent},
  {path: 'loandetails', component: LoanDetailsComponent},
  {path: 'bankuser', component: UserOnlineBankComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'billpayment', component: BillPaymentComponent},
  {path: 'onlineadmin', component: OnlineAdminComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'updateaccount', component: UpdateAccountComponent},
  {path: 'document', component: DocumentComponent},
  {path: 'admin-document', component: AdminDocumentComponent},
  {path: 'maindash', component: MaindashComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
