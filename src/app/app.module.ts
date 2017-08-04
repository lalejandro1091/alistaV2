import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AdministracionEppPage } from '../pages/administracion-epp/administracion-epp';
import { CargarRltPage } from '../pages/cargar-rlt/cargar-rlt';
import { CmipevrPage } from '../pages/cmipevr/cmipevr';
import { ComunicacionPage } from '../pages/comunicacion/comunicacion';
import { ConsultarIncidentePage } from '../pages/consultar-incidente/consultar-incidente';
import { ConsultarRaciPage } from '../pages/consultar-raci/consultar-raci';
import { ConsultarRlPage } from '../pages/consultar-rl/consultar-rl';
import { ConsultarRltPage } from '../pages/consultar-rlt/consultar-rlt';
import { CreacionEmpresaPage } from '../pages/creacion-empresa/creacion-empresa';
import { CrearRaciPage } from '../pages/crear-raci/crear-raci';
import { DatosGeneralesPage } from '../pages/datos-generales/datos-generales';
import { EmpresaPage } from '../pages/empresa/empresa';
import { NotificarInconsistenciaPage } from '../pages/notificar-inconsistencia/notificar-inconsistencia';
import { RendicionCuentasPage } from '../pages/rendicion-cuentas/rendicion-cuentas';
import { ReportarIncidentePage } from '../pages/reportar-incidente/reportar-incidente';
import { SmipevrPage } from '../pages/smipevr/smipevr';
import { IpevrPage } from '../pages/ipevr/ipevr';
import { ReporteIncidentePage } from '../pages/reporte-incidente/reporte-incidente';
import { RaciPage } from '../pages/raci/raci';
import { RelacionesLaboralesPage } from '../pages/relaciones-laborales/relaciones-laborales';
import { SedePage } from '../pages/sede/sede';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { CrearUsuarioPage } from '../pages/crear-usuario/crear-usuario';
import { AgregarSedePage } from '../pages/agregar-sede/agregar-sede';
import { ExpandableComponent } from '../components/expandable/expandable';
import { SettingsPage } from '../pages/settings/settings';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    AdministracionEppPage,
    CargarRltPage,
    CmipevrPage,
    ComunicacionPage,
    ConsultarIncidentePage,
    ConsultarRaciPage,
    ConsultarRlPage,
    ConsultarRltPage,
    CreacionEmpresaPage,
    CrearRaciPage,
    DatosGeneralesPage,
    EmpresaPage,
    NotificarInconsistenciaPage,
    RendicionCuentasPage,
    ReportarIncidentePage,
    SmipevrPage,
    IpevrPage,
    ReporteIncidentePage,
    RaciPage,
    RelacionesLaboralesPage,
    SedePage,
    UsuariosPage,
    CrearUsuarioPage,
    AgregarSedePage,
    ExpandableComponent,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    AdministracionEppPage,
    CargarRltPage,
    CmipevrPage,
    ComunicacionPage,
    ConsultarIncidentePage,
    ConsultarRaciPage,
    ConsultarRlPage,
    ConsultarRltPage,
    CreacionEmpresaPage,
    CrearRaciPage,
    DatosGeneralesPage,
    EmpresaPage,
    NotificarInconsistenciaPage,
    RendicionCuentasPage,
    ReportarIncidentePage,
    SmipevrPage,
    IpevrPage,
    ReporteIncidentePage,
    RaciPage,
    RelacionesLaboralesPage,
    SedePage,
    UsuariosPage,
    CrearUsuarioPage,
    AgregarSedePage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
