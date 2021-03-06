import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';
import { TrainerComponent } from './trainer/trainer.component';
import { StatusService } from './status.service';
import { MetricsComponent } from './metrics/metrics.component';
import { PredictorComponent } from './predictor/predictor.component';
import { AcquisitorComponent } from './acquisitor/acquisitor.component';
import { MapToIterable } from './map-to-iterable.pipe';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    // canActivate: [AuthguardGuard],
    component: HomeComponent
  },
  {
    path: 'acquisitor',
    component: AcquisitorComponent
  },
  {
    path: 'trainer',
    //canActivate: [AuthguardGuard],
    component: TrainerComponent
  },
  {
    path: 'metrics',
    component: MetricsComponent
  },
  {
    path: 'predictor',
    //canActivate: [AuthguardGuard],
    component: PredictorComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TrainerComponent,
    MetricsComponent,
    PredictorComponent,
    AcquisitorComponent,
    MapToIterable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, AuthguardGuard, StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
